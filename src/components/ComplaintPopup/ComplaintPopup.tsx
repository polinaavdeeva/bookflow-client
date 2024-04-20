import React, { FC } from "react";
import "./ComplaintPopup.scss";
import { Button } from "@consta/uikit/Button";

interface IComplaintProps {}

const ComplaintPopup: FC<IComplaintProps> = ({}): React.ReactElement => {
  return (
    <section className={`popup popup_opened`}>
      <div className="popup__feedback-container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title">Пожаловаться</h2>
        <form className="popup__form-feedback ">
          <textarea
            className="popup__feedback-input"
            id="annotation"
            placeholder="Опишите жалобу"
          ></textarea>
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

export default ComplaintPopup;
