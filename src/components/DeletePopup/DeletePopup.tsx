import React, { FC } from "react";
import "./DeletePopup.scss";
import { Button } from "@consta/uikit/Button";
import { userApi } from "../../utils/UserApi";
import { useNavigate } from "react-router-dom";

interface IDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string | undefined;
}

const DeletePopup: FC<IDeleteProps> = ({
  isOpen,
  onClose,
  userId,
}): React.ReactElement => {
  const navigate = useNavigate();

  const handleDelete = () => {
    userApi
      .deleteUser(userId || "")
      .then((message) => {
        navigate("/complaints");
        onClose();
      })
      .catch((error) => {
        console.error("Ошибка при удалении пользователя:", error.message);
      });
  };

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
          Вы действительно хотите удалить аккаунт?
        </h2>
        <form className="popup__form-delete ">
          <Button
            className="popup__delete-button"
            label="Да"
            form="round"
            onClick={handleDelete}
          />
          <Button
            className="popup__delete-button"
            label="Нет"
            form="round"
            onClick={onClose}
          />
        </form>
      </div>
    </section>
  );
};

export default DeletePopup;
