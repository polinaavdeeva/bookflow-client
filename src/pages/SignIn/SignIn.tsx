import { Button } from "@consta/uikit/Button";
import { TextField } from "@consta/uikit/TextField";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./SignIn.scss";

const SignIn: FC = (): React.ReactElement => {
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
          <form className="sign-in__form">
            <TextField
              className="sign-in__input"
              label="Email"
              type="text"
              size="xs"
              view="clear"
            />

            <TextField
              className="sign-in__input"
              label="Пароль"
              size="xs"
              type="password"
              view="clear"
            />
            <div className="sign-in__button-container">
            <Link className="sign-in__link" to="/.">
              <Button
                className="sign-in__button"
                type="submit"
                label="Войти"
                form="round"
              />
            </Link>
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
