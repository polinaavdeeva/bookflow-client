import React, { FC } from "react";
import "./FeedbackPopup.scss";
import { Button } from "@consta/uikit/Button";

interface IFeedbackProps {}

const FeedbackPopup: FC<IFeedbackProps> = ({}): React.ReactElement => {
  return (
    <section className={`popup`}>
      <div className="popup__feedback-container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title">Добавить отзыв</h2>
        <form className="popup__form-feedback ">
          <textarea
            className="popup__feedback-input"
            id="annotation"
            placeholder="Отзыв"
          ></textarea>
          <div className="popup__feedback-number">
            <Button className="popup__number" label="1"></Button>
            <Button className="popup__number" label="2"></Button>
            <Button className="popup__number" label="3"></Button>
            <Button className="popup__number" label="4"></Button>
            <Button className="popup__number" label="5"></Button>
          </div>
          <Button
            className="popup__add-button"
            label="Сохранить"
            form="round"
          />
        </form>
      </div>
    </section>
  );
};

export default FeedbackPopup;
