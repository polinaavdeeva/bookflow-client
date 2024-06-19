import React, { FC } from "react";
import "./DeletePopup.scss";
import { Button } from "@consta/uikit/Button";
import { commentApi } from "../../utils/CommentApi";

interface IDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  commentId: string;
}

const DeleteCommentPopup: FC<IDeleteProps> = ({
  isOpen,
  onClose,
  commentId,
}): React.ReactElement => {
  const handleDeleteComment = (commentId: string) => {
    commentApi
      .deleteComment(commentId)
      .then((message) => {
        onClose();
      })
      .catch((error) => {
        console.error("Ошибка при удалении комментария:", error.message);
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
          Вы действительно хотите удалить отзыв?
        </h2>
        <form className="popup__form-delete ">
          <Button
            className="popup__delete-button"
            label="Да"
            form="round"
            onClick={() => handleDeleteComment(commentId)}
          />
          <Button className="popup__delete-button" label="Нет" form="round" />
        </form>
      </div>
    </section>
  );
};

export default DeleteCommentPopup;
