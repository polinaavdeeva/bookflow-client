import { Button } from "@consta/uikit/Button";
import { DatePicker, DatePickerPropValue } from "@consta/uikit/DatePicker";
import { TextField } from "@consta/uikit/TextField";
import { Checkbox } from "@consta/uikit/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import React, { FC, useState, ChangeEvent, useEffect, FormEvent } from "react";
import logo from "../../../assets/logo.png";
import "./SignUp.scss";
import { auth } from "../../../utils/Auth";
import "../../../../globalYm";

interface ISignIn {
  setLogin: () => void;
}

const SignUp: FC<ISignIn> = ({ setLogin }): React.ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [patronymic, setPatronymic] = useState<string>("");
  const [gender, setGender] = useState<string>("Мужской");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const defaultRegistrationDate = new Date();
  const [registrationDate, setRegistrationDate] = useState<Date>(
    defaultRegistrationDate
  );

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleChangeLastName(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleChangePatronymic(e: ChangeEvent<HTMLInputElement>) {
    setPatronymic(e.target.value);
  }

  const handleChangeDateOfBirth = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDateOfBirth(event.target.value);
  };

  function handleChangeGender(event: ChangeEvent<HTMLSelectElement>) {
    setGender(event.target.value);
  }

  const navigate = useNavigate();

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    auth
      .register(
        name,
        email,
        password,
        gender,
        dateOfBirth,
        lastName,
        patronymic,
        registrationDate
      )
      .then(() => {
        auth.authorize(email, password).then((data) => {
          localStorage.setItem("token", data.token);
          setLogin();
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err.status);
      });
  }

  useEffect(() => {
    setEmail("");
    setPassword("");
    setLastName("");
    setPatronymic("");
    setDateOfBirth("");
    setGender("Мужской");
  }, [
    setEmail,
    setPassword,
    setDateOfBirth,
    setGender,
    setName,
    setLastName,
    setPatronymic,
  ]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="sign-up">
      <div className="sign-up__background-logo" />
      <div className="sign-up__background-img" />
      <div className="sign-up__content">
        <div className="sign-up__content-container">
          <div className="sign-up__logo">
            <img src={logo} className="sign-up__logo-img" alt="Логотип" />
            <h2 className="sign-up__name">BookFlow</h2>
          </div>
          <h2 className="sign-up__title">Регистрация</h2>
          <form className="sign-up__form" onSubmit={handleSubmit}>
            <div className="sign-up__inputs-container">
              <TextField
                className="sign-up__input"
                label="Фамилия"
                type="text"
                size="xs"
                view="clear"
                value={lastName || ""}
                onInput={handleChangeLastName}
              />

              <TextField
                className="sign-up__input"
                label="Имя"
                type="text"
                size="xs"
                view="clear"
                value={name || ""}
                onInput={handleChangeName}
              />
            </div>
            <div className="sign-up__inputs-container">
              <TextField
                className="sign-up__input"
                label="Отчество"
                type="text"
                size="xs"
                view="clear"
                value={patronymic || ""}
                onInput={handleChangePatronymic}
              />
              <select
                name="gender"
                value={gender}
                className="sign-up__gender-input"
                onChange={handleChangeGender}
              >
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>
              </select>
            </div>
            <div className="sign-up__inputs-container sign-up_data">
              <label className="sign-up__item-label" htmlFor="dateOfBirth">
                Дата рождения
              </label>
              <input
                className="sign-up__data"
                type="date"
                value={dateOfBirth}
                onChange={handleChangeDateOfBirth}
              />
            </div>
            <div className="sign-up__inputs-container">
              <TextField
                className="sign-up__input"
                label="Email"
                type="text"
                size="xs"
                view="clear"
                value={email || ""}
                onInput={handleChangeEmail}
              />

              <TextField
                className="sign-up__input"
                label="Пароль"
                size="xs"
                type="password"
                view="clear"
                value={password || ""}
                onInput={handleChangePassword}
              />
            </div>
            <div className="sign-up__checkbox-container">
              <Checkbox
                className="sign-up__checkbox"
                label="Я согласен с правилами пользования"
                size="s"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="sign-up__button-container">
              <Button
                className="sign-up__button"
                type="submit"
                onClick={() => {
                  window.ym(97632400, "reachGoal", "ButtonSignUp");
                }}
                label="Зарегистрироваться"
                form="round"
                disabled={!isChecked}
              />
            </div>
          </form>
          <div>
            <p className="sign-in__question">
              У вас уже есть аккаунт?{" "}
              <Link className="sign-in__link" to="/sign-in">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
