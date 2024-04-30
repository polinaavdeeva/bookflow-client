import { Button } from "@consta/uikit/Button";
import { TextField } from "@consta/uikit/TextField";
import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем useHistory из react-router-dom
import logo from "../../../assets/logo.png";
import "./SignIn.scss";

interface ISignIn {
  loggedIn: () => void;
  setAdmin: (boolean: boolean) => void;
}

const SignIn: FC<ISignIn> = ({ loggedIn, setAdmin }): React.ReactElement => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailInput = (event.target as HTMLFormElement).elements.namedItem(
      "email"
    ) as HTMLInputElement | null;

    const passwordInput = (event.target as HTMLFormElement).elements.namedItem(
      "password"
    ) as HTMLInputElement | null;

    const email = emailInput ? emailInput.value : "";
    const password = passwordInput ? passwordInput.value : "";

    if (email === "admin@gmail.com" && password === "admin") {
      setAdmin(true);
    }

    loggedIn();

    navigate("/");
  };

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
          <form className="sign-in__form" onSubmit={handleLogin}>
            <TextField
              className="sign-in__input"
              label="Email"
              type="text"
              size="xs"
              view="clear"
              name="email"
            />

            <TextField
              className="sign-in__input"
              label="Пароль"
              size="xs"
              type="password"
              view="clear"
              name="password"
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
