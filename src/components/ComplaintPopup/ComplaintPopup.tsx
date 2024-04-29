import React, { FC, useState } from "react";
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
  const [reason, setReason] = React.useState<string>("");

  const handleReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(event.target.value);
  };

  type Item = {
    label: string;
    id: number;
  };

  const items: Item[] = [
    {
      label: "Аккаунт пользователя",
      id: 1,
    },
    {
      label: "Некорректный отзыв",
      id: 2,
    },
    {
      label: "Неправильное заполнение карточки книги",
      id: 3,
    },
  ];

  const [value, setValue] = useState<Item | null>();

  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__feedback-container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
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
          <form className="popup__form-feedback ">
            <textarea
              className="popup__feedback-input"
              id="annotation"
              placeholder="..."
            ></textarea>
            <Button
              className="popup__add-button"
              label="Отправить"
              form="round"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ComplaintPopup;
