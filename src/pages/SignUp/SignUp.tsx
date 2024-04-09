import { Button } from "@consta/uikit/Button";
import { DatePicker } from "@consta/uikit/DatePicker";
import { Select } from "@consta/uikit/Select";
import { TextField } from "@consta/uikit/TextField";
import { Checkbox } from "@consta/uikit/Checkbox";
import { Link } from "react-router-dom";
import React, { FC, useState, ChangeEvent } from "react";
import logo from "../../assets/logo.png";
import "./SignUp.scss";

const SignUp: FC = (): React.ReactElement => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const [data, setData] = useState<Date | null>(null);

  type Item = {
    label: string;
    id: number;
  };

  const items: Item[] = [
    {
      label: "Женский",
      id: 1,
    },
    {
      label: "Мужской",
      id: 2,
    },
    {
      label: "Другой",
      id: 3,
    },
  ];

  const [value, setValue] = useState<Item | null>();

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
          <form className="sign-up__form">
            <div className="sign-up__inputs-container">
              <TextField
                className="sign-up__input"
                label="Фамилия"
                type="text"
                size="xs"
                view="clear"
              />

              <TextField
                className="sign-up__input"
                label="Имя"
                type="text"
                size="xs"
                view="clear"
              />
            </div>
            <div className="sign-up__inputs-container">
              <TextField
                className="sign-up__input"
                label="Отчество"
                type="text"
                size="xs"
                view="clear"
              />

              <Select
                className="sign-up__input"
                label="Пол"
                items={items}
                value={value}
                onChange={setValue}
                size="xs"
                view="clear"
              />
            </div>
            <div className="sign-up__inputs-container">
              <DatePicker
                className="sign-up__input"
                label="Дата рождения"
                value={data}
                onChange={setData}
                size="xs"
                view="clear"
              />
            </div>
            <div className="sign-up__inputs-container">
              <TextField
                className="sign-up__input"
                label="Email"
                type="text"
                size="xs"
                view="clear"
              />

              <TextField
                className="sign-up__input"
                label="Пароль"
                size="xs"
                type="password"
                view="clear"
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
              <Link to="/.">
                <Button
                  className="sign-up__button"
                  type="submit"
                  label="Зарегистрироваться"
                  form="round"
                  disabled={!isChecked}
                />
              </Link>
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
