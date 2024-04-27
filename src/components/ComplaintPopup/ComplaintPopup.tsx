import React, { FC } from "react";
import "./ComplaintPopup.scss";
import { Button } from "@consta/uikit/Button";

interface IComplaintProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComplaintPopup: FC<IComplaintProps> = ({
  isOpen,
  onClose,
}): React.ReactElement => {
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__feedback-container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
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
