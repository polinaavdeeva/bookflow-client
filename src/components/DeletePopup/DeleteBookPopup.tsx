import React, { FC } from "react";
import "./DeletePopup.scss";
import { Button } from "@consta/uikit/Button";
import BookServices from "../../utils/BookServices";
import { useNavigate } from "react-router-dom";

interface IDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  bookId: string | null;
}

const DeleteBookPopup: FC<IDeleteProps> = ({
  isOpen,
  onClose,
  bookId,
}): React.ReactElement => {
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    if (!bookId) return;

    BookServices.deleteBook(bookId)
      .then(() => {
        navigate("/complaints");
        onClose();
      })
      .catch((error: { message: any }) => {
        console.error("Ошибка при удалении книги:", error.message);
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
          Вы действительно хотите удалить карточку книги?
        </h2>
        <form className="popup__form-delete ">
          <Button
            className="popup__delete-button"
            label="Да"
            form="round"
            onClick={handleDeleteBook}
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

export default DeleteBookPopup;
