import React, { FC } from "react";
import "./DeletePopup.scss";
import { Button } from "@consta/uikit/Button";

interface IDeleteProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeletePopup: FC<IDeleteProps> = ({
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
        <h2 className="popup__title">
          {" "}
          Вы действитель хотите удалить аккаунт?
        </h2>
        <form className="popup__form-delete ">
          <Button className="popup__delete-button" label="Да" form="round" />
          <Button className="popup__delete-button" label="Нет" form="round" />
        </form>
      </div>
    </section>
  );
};

export default DeletePopup;
