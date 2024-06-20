import React, { FC, useEffect, useState } from "react";
import "./ComplaintPopup.scss";
import { Button } from "@consta/uikit/Button";
import { complaintApi } from "../../utils/ComplaintApi";
import { useLocation, useParams } from "react-router-dom";

interface IComplaintProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string | undefined;
}

const ComplaintPopup: FC<IComplaintProps> = ({
  isOpen,
  onClose,
  userId,
}): React.ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [reason, setReason] = useState<string>("Аккаунт пользователя");
  const [text, setText] = useState<string>("");
  const [idFromLocation, setIdFromLocation] = useState<string | null>(null);

  const location = useLocation();
  const [bookId, setBookId] = useState<string | null>(null);

  const resetForm = () => {
    setReason("Аккаунт пользователя");
    setText("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const bookIdFromURL = params.get("id");
    setBookId(bookIdFromURL);
  }, [location]);

  useEffect(() => {
    const pathname = location.pathname;
    const lastIndex = pathname.lastIndexOf("/");
    const id = pathname.substring(lastIndex + 1);
    setIdFromLocation(id);
  }, [location]);

  const handleReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (reason && text) {
      complaintApi
        .addComplaints({
          reason,
          text,
          userId,
          bookId,
          id: idFromLocation || "",
        })
        .then((data) => {
          resetForm();
          setText("");

          onClose();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__feedback-container">
        <button
          className="popup__close-button"
          type="button"
          onClick={handleClose}
        ></button>
        <h2 className="popup__title">Пожаловаться</h2>

        <div className="popup__form-container">
          <p className="popup__subtitle">Выберите причину жалобы</p>
          <select
            id="complaint"
            name="reason"
            value={reason}
            className="popup__reason"
            onChange={handleReasonChange}
          >
            <option value="Аккаунт пользователя">Аккаунт пользователя</option>
            <option value="Некорректный отзыв">Некорректный отзыв</option>
            <option value="Неправильное заполнение карточки книги">
              Неправильное заполнение карточки книги
            </option>
          </select>
        </div>

        <div className="popup__form-container">
          <p className="popup__subtitle">Опишите проблему</p>
          <form className="popup__form-feedback " onSubmit={handleSubmit}>
            <textarea
              className="popup__feedback-input"
              id="annotation"
              placeholder="..."
              onChange={handleTextChange}
            ></textarea>
            <Button
              className="popup__add-button"
              label="Отправить"
              form="round"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ComplaintPopup;
