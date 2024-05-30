import React, { FC } from "react";
import "./AddBookPopup.scss";
import { Button } from "@consta/uikit/Button";
import defaultPhoto from "../../assets/defult-book-add-photo.png";
import { File } from "@consta/uikit/File";

interface IAddBookProps {
  isOpen: boolean;
  onClose: () => void;
}

const CorrectBookPopup: FC<IAddBookProps> = ({
  isOpen,
  onClose,
}): React.ReactElement => {
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Редактирование книги</h2>
        <form className="popup__form">
          <div className="popup__book-info">
            <File extension="jpg" className="popup__book-img" />
            <div className="popup__inputs-container">
              <div className="popup__input-row">
                <label className="popup__input-label" htmlFor="book-name">
                  Название книги
                </label>
                <input
                  className="popup__input"
                  id="book-name"
                  type="text"
                  placeholder="Название книги"
                />
              </div>
              <div className="popup__input-row">
                <label className="popup__input-label" htmlFor="author-name">
                  Автор
                </label>
                <input
                  className="popup__input"
                  id="author-name"
                  type="text"
                  placeholder="Имя автора"
                />
              </div>
            </div>
            <div className="popup__annotation-container">
              <label className="popup__input-label" htmlFor="annotation">
                Аннотация
              </label>
              <textarea
                className="popup__annotation-input"
                id="annotation"
                placeholder="Аннотация"
              ></textarea>
            </div>
          </div>

          <Button
            className="popup__add-button"
            label="Резместить"
            form="round"
          />
        </form>
      </div>
    </section>
  );
};

export default CorrectBookPopup;
