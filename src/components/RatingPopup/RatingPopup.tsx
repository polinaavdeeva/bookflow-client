import React, { FC, useContext, useState } from "react";
import "./RatingPopup.scss";
import { Button } from "@consta/uikit/Button";
import { userApi } from "../../utils/UserApi";

interface IRatingProps {
  userId: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const RatingPopup: FC<IRatingProps> = ({
  isOpen,
  onClose,
  userId,
}): React.ReactElement => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleRatingSubmit = () => {
    if (!selectedRating) return;
    userApi
      .sendRating(userId || "", selectedRating)
      .then((data) => {
        onClose();
      })
      .catch((error) => {
        console.error("Ошибка при отправке рейтинга:", error);
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
        <h2 className="popup__title">Оцените данного пользователя</h2>
        <form className="popup__form-feedback ">
          <div className="popup__feedback-number">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                className="popup__number"
                label={rating.toString()}
                onClick={() => handleRatingSelect(rating)}
              ></Button>
            ))}
          </div>
          <Button
            className="popup__add-button"
            label="Отправить"
            form="round"
            onClick={handleRatingSubmit}
          />
        </form>
      </div>
    </section>
  );
};

export default RatingPopup;
