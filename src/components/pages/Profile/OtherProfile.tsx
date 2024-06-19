import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Profile.scss";
import { Avatar } from "@consta/uikit/Avatar";
import { Card } from "@consta/uikit/Card";
import { Button } from "@consta/uikit/Button";
import defaultAvatar from "../../../assets/аватарка_по-умолчанию.png";
import ratingStar from "../../../assets/рейтинг.png";
import { userApi } from "../../../utils/UserApi";
import RatingPopup from "../../RatingPopup/RatingPopup";
import DeletePopup from "../../DeletePopup/DeletePopup";

interface IOtherProfile {
  onDelete: () => void;
  addComplaint: () => void;
  isAdmin: boolean;
}

const OtherProfile: FC<IOtherProfile> = ({
  onDelete,
  addComplaint,
  isAdmin,
}) => {
  const { id } = useParams<{ id: string }>();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isRatingPopupOpen, setRatingPopupOpen] = useState<boolean>(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);

  const fetchUserInfo = async () => {
    if (id) {
      const data = await userApi.getUserById(id);
      setUserInfo(data.user);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [isRatingPopupOpen]);

  const handleRatingClick = () => {
    setRatingPopupOpen(true);
  };

  const handleContactClick = () => {
    if (userInfo?.email) {
      window.location.href = `mailto:${userInfo.email}`;
    }
  };

  return (
    <section className="profile">
      <RatingPopup
        userId={id}
        isOpen={isRatingPopupOpen}
        onClose={() => setRatingPopupOpen(false)}
      />
      <DeletePopup
        userId={id}
        isOpen={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
      />
      <div className="profile__background"></div>
      <Card
        className="profile__name-container"
        form="round"
        verticalSpace="2xl"
      >
        <div className="profile__avatar-container">
          <Avatar
            className="profile__avatar"
            size="l"
            name="..."
            url={defaultAvatar}
          />
          <h2 className="profile__name">
            {userInfo?.name} {userInfo?.lastName}
          </h2>
          <span className="profile__name-role"> — Читатель</span>
        </div>
        <div className="profile__button-container">
          {isAdmin ? (
            <Button
              className="profile__edit-button"
              label="Удалить"
              form="round"
              onClick={() => setIsDeletePopupOpen(true)}
            />
          ) : (
            <>
              <Button
                className="profile__edit-button"
                label="Оставить жалобу"
                form="round"
                onClick={addComplaint}
              />
              <Button
                className="profile__edit-button"
                label="Связаться"
                form="round"
                onClick={handleContactClick}
              />
              <Button
                className="profile__edit-button"
                label="Оценить"
                form="round"
                onClick={handleRatingClick}
              />
            </>
          )}
        </div>
      </Card>
      <Card
        className="profile__info-container"
        form="round"
        verticalSpace="5xl"
      >
        <h2 className="profile__info-title">Информация</h2>
        <div className="profile__info-columns">
          <div className="profile__info-column">
            <div className="profile__info-row">
              <label className="profile__item-label">Фамилия</label>
              <p className="profile__text">{userInfo?.lastName}</p>
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label">Имя</label>
              <p className="profile__text">{userInfo?.name}</p>
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label">Отчество</label>
              <p className="profile__text">{userInfo?.patronymic}</p>
            </div>
          </div>
          <div className="profile__info-column">
            <div className="profile__info-row">
              <label className="profile__item-label">Пол</label>
              <p className="profile__text">{userInfo?.gender}</p>
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label">Email</label>
              <p className="profile__text">{userInfo?.email}</p>
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label">Дата рождения</label>
              <p className="profile__text">{userInfo?.dateOfBirth}</p>
            </div>
          </div>
          <div className="profile__info-column">
            <div className="profile__info-row">
              <label className="profile__item-label">Дата регистрации</label>
              <p className="profile__text">{userInfo?.registrationDate}</p>
            </div>
            <div className="profile__rating">
              <p className="profile__rating-title">Рейтинг</p>
              <div className="profile__rating-container">
                <p className="profile__rating-count">{userInfo?.rating}</p>
                <img
                  src={ratingStar}
                  alt="звезда"
                  className="profile__rating-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default OtherProfile;
