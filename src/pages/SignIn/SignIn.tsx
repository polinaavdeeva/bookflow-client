import { Button } from "@consta/uikit/Button";
import { TextField } from "@consta/uikit/TextField";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./SignIn.scss";

const SignIn: FC = (): React.ReactElement => {
  return (
    <section className="sign-up">
      <div className="sign-up__background-logo" />
      <div className="sign-up__content">
        <div className="sign-up__content-container">
          <div className="sign-up__logo">
            <img src={logo} className="sign-up__logo-img" alt="Логотип" />
            <h2 className="sign-up__name">BookFlow</h2>
          </div>
          <h2 className="sign-up__title">Войти</h2>
          <form className="sign-up__form">
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
            
            <div className="sign-up__button-container">
              <Link to="/.">
                <Button
	                className="sign-up__button"
	                type="submit"
	                label="Войти"
	                form="round"/>
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
      <div className="sign-up__background-img" />
    </section>
  );
};

export default SignIn;
