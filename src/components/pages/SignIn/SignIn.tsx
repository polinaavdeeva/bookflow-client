import { Button } from "@consta/uikit/Button";
import { TextField } from "@consta/uikit/TextField";
import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем useHistory из react-router-dom
import logo from "../../../assets/logo.png";
import "./SignIn.scss";
import { auth } from "../../../utils/Auth";

interface ISignIn {
  setLogin: () => void;
  setAdmin: (boolean: boolean) => void;
}

const SignIn: FC<ISignIn> = ({ setLogin, setAdmin }): React.ReactElement => {
  const [email, setUserEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setUserEmail(e.target.value);
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      setAdmin(true);
      navigate("/");
    } else {
      auth
        .authorize(email, password)
        .then((data) => {
          localStorage.setItem("token", data.token);
          setUserEmail(email);
          setLogin();
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    setUserEmail("");
    setPassword("");
  }, []);

  return (
    <section className="sign-in">
      <div className="sign-in__background-logo" />
      <div className="sign-in__content">
        <div className="sign-in__content-container">
          <div className="sign-in__logo">
            <img src={logo} className="sign-in__logo-img" alt="Логотип" />
            <h2 className="sign-in__name">BookFlow</h2>
          </div>
          <h2 className="sign-in__title">Войти</h2>
          <form className="sign-in__form" onSubmit={handleSubmit}>
            <TextField
              className="sign-in__input"
              label="Email"
              type="text"
              size="xs"
              view="clear"
              name="email"
              value={email}
              onInput={handleChangeEmail}
            />

            <TextField
              className="sign-in__input"
              label="Пароль"
              size="xs"
              type="password"
              view="clear"
              name="password"
              value={password}
              onInput={handleChangePassword}
            />
            <div className="sign-in__button-container">
              <Button
                className="sign-in__button"
                type="submit"
                label="Войти"
                form="round"
              />
            </div>
          </form>
          <div>
            <p className="sign-in__question">
              У вас нет аккаунта?{" "}
              <Link className="sign-in__link" to="/sign-up">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="sign-in__background-img" />
    </section>
  );
};

export default SignIn;
