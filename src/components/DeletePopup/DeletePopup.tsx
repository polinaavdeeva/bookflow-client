import React, { FC } from "react";
import "./DeletePopup.scss";
import { Button } from "@consta/uikit/Button";

interface IDeleteProps {}

const DeletePopup: FC<IDeleteProps> = ({}): React.ReactElement => {
  return (
    <section className={`popup popup_opened`}>
      <div className="popup__feedback-container">
        <button className="popup__close-button" type="button"></button>
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
