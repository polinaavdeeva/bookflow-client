import React, { FC } from "react";
import "./RatingPopup.scss";
import { Button } from "@consta/uikit/Button";

interface IRatingProps {}

const RatingPopup: FC<IRatingProps> = ({}): React.ReactElement => {
  return (
    <section className={`popup`}>
      <div className="popup__feedback-container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title">Оцените данного пользователя</h2>
        <form className="popup__form-feedback ">
          <div className="popup__feedback-number">
            <Button className="popup__number" label="1"></Button>
            <Button className="popup__number" label="2"></Button>
            <Button className="popup__number" label="3"></Button>
            <Button className="popup__number" label="4"></Button>
            <Button className="popup__number" label="5"></Button>
          </div>
          <Button
            className="popup__add-button"
            label="Отправить"
            form="round"
          />
        </form>
      </div>
    </section>
  );
};

export default RatingPopup;
