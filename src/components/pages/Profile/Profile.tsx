import React, { FC, useEffect, useState } from "react";
import "./Profile.scss";
import { Avatar } from "@consta/uikit/Avatar";
import { Card } from "@consta/uikit/Card";
import { Button } from "@consta/uikit/Button";
import defaultAvatar from "../../../assets/аватарка_по-умолчанию.png";
import ratingStar from "../../../assets/рейтинг.png";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../context/CurrentUserContext";
import { userApi } from "../../../utils/UserApi";
import { File } from "@consta/uikit/File";

interface IProfile {
  setDelete: () => void;
  addComplaint: () => void;
  isAdmin: boolean;
}

const Profile: FC<IProfile> = ({
  setDelete,
  addComplaint,
  isAdmin,
}): React.ReactElement => {
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>(currentUser?.name || "");
  const [lastName, setLastName] = useState<string>(currentUser?.lastName || "");
  const [patronymic, setPatronymic] = useState<string>(
    currentUser?.patronymic || ""
  );
  const [gender, setGender] = useState<string>(currentUser?.gender || "");
  const [email, setEmail] = useState<string>(currentUser?.email || "");
  const [rating, setRating] = useState<string>("4.93");
  const [dateOfBirth, setDateOfBirth] = useState<string>(
    currentUser?.dateOfBirth || ""
  );
  const [registerData, setRegisterData] = useState<Date | undefined>(
    currentUser?.registrationDate
  );
  const [isMyProfile, setIsMyProfile] = useState<boolean>(true);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    userApi
      .getUserAvatar()
      .then((data) => {})
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  }, []);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(event.target.files[0]);
      userApi
        .uploadAvatar(event.target.files[0])
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isEditing) {
      setLastName(event.target.value);
    }
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isEditing) {
      setFirstName(event.target.value);
    }
  };

  const handlePatronymicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isEditing) {
      setPatronymic(event.target.value);
    }
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isEditing) {
      setEmail(event.target.value);
    }
  };

  const handleChangeDateOfBirth = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDateOfBirth(event.target.value);
  };

  function handleSubmit() {
    const userData = {
      name: firstName,
      email: email,
      lastName: lastName,
      patronymic: patronymic,
      gender: gender,
      dateOfBirth: dateOfBirth,
    };

    userApi
      .editUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(avatar);
  }

  React.useEffect(() => {
    setFirstName(currentUser?.name || "");
    setDateOfBirth(currentUser?.dateOfBirth || "");
    setEmail(currentUser?.email || "");
    setGender(currentUser?.gender || "");
    setLastName(currentUser?.lastName || "");
    setPatronymic(currentUser?.patronymic || "");
    setRegisterData(currentUser?.registrationDate || undefined);
    //setAvatar(null);
  }, [currentUser]);

  return (
    <section className="profile">
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
            url={avatar ? URL.createObjectURL(avatar) : ""}
          />
          <input
            type="file"
            accept="image/*"
            className="profile__avatar-upload"
            onChange={handleAvatarChange}
          />
          <h2 className="profile__name">
            {currentUser?.name} {currentUser?.lastName}
          </h2>
          <span className="profile__name-role"> — Читатель</span>
        </div>
        {isAdmin ? (
          <Button
            className="profile__edit-button"
            label="Удалить аккаунт"
            form="round"
            onClick={setDelete}
          />
        ) : isMyProfile ? (
          !isEditing ? (
            <Button
              className="profile__edit-button"
              label="Редактировать"
              form="round"
              onClick={() => setIsEditing(!isEditing)}
            />
          ) : (
            <></>
          )
        ) : (
          <div className="profile__button-container">
            <Button
              className="profile__edit-button"
              label="Связаться"
              form="round"
            />
            <Button
              className="profile__edit-button"
              label="Оставить жалобу"
              form="round"
              onClick={addComplaint}
            />
          </div>
        )}
      </Card>
      <Card
        className="profile__info-container"
        form="round"
        verticalSpace="5xl"
      >
        <h2 className="profile__info-title">Информация</h2>
        <div
          className={
            isEditing
              ? "profile__info-columns-editing"
              : "profile__info-columns"
          }
        >
          <div className="profile__info-column">
            <div className="profile__info-row">
              <label className="profile__item-label" htmlFor="lastName">
                Фамилия
              </label>
              {isEditing ? (
                <input
                  id="lastName"
                  type="text"
                  placeholder="Введите фамилию"
                  value={lastName}
                  className={
                    isEditing ? "profile__editing-input" : "profile__input"
                  }
                  onChange={handleLastNameChange}
                />
              ) : (
                <p className="profile__text">{lastName}</p>
              )}
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label" htmlFor="firstName">
                Имя
              </label>
              {isEditing ? (
                <input
                  id="firstName"
                  type="text"
                  placeholder="Введите имя"
                  value={firstName}
                  className={isEditing ? "profile__editing-input" : ""}
                  onChange={handleFirstNameChange}
                />
              ) : (
                <p className="profile__text">{firstName}</p>
              )}
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label" htmlFor="patronymic">
                Отчество
              </label>
              {isEditing ? (
                <input
                  id="patronymic"
                  type="text"
                  placeholder="Введите отчество"
                  value={patronymic}
                  className={isEditing ? "profile__editing-input" : ""}
                  onChange={handlePatronymicChange}
                />
              ) : (
                <p className="profile__text">{patronymic}</p>
              )}
            </div>
          </div>
          <div className="profile__info-column">
            <div className="profile__info-row">
              <label className="profile__item-label" htmlFor="gender">
                Пол
              </label>
              {isEditing ? (
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  className={isEditing ? "profile__editing-input" : ""}
                  onChange={handleGenderChange}
                >
                  <option value="Мужской">Мужской</option>
                  <option value="Женский">Женский</option>
                </select>
              ) : (
                <p className="profile__text">{gender}</p>
              )}
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label" htmlFor="email">
                Email
              </label>
              {isEditing ? (
                <input
                  id="email"
                  type="email"
                  placeholder="Введите email"
                  value={email}
                  className={isEditing ? "profile__editing-input" : ""}
                  onChange={handleEmailChange}
                />
              ) : (
                <p className="profile__text">{email}</p>
              )}
            </div>
            <div className="profile__info-row">
              <label className="profile__item-label" htmlFor="dateOfBirth">
                Дата рождения
              </label>
              {isEditing ? (
                <input
                  id="dateOfBirth"
                  type="date"
                  className="profile__data"
                  value={dateOfBirth}
                  onChange={handleChangeDateOfBirth}
                />
              ) : (
                <p className="profile__text"> {dateOfBirth}</p>
              )}
            </div>
          </div>
          <div className="profile__info-column">
            <div className="profile__info-row">
              <label
                className="profile__item-label"
                htmlFor="dateOfRegistration"
              >
                Дата регистрации
              </label>
              <p className="profile__text">
                {registerData &&
                  new Date(registerData).toISOString().slice(0, 10)}
              </p>
            </div>
            <div className="profile__rating">
              <p className="profile__rating-title">Рейтинг</p>
              <div className="profile__rating-num-container">
                <p className="prifile__rating-num">{rating}</p>
                <img src={ratingStar} alt="Рейтинг" />
              </div>
            </div>
          </div>
        </div>
      </Card>
      {isAdmin ? (
        <></>
      ) : !isMyProfile ? (
        <></>
      ) : (
        <Card
          className="profile__button-container"
          form="round"
          verticalSpace="2xl"
        >
          {!isEditing ? (
            <>
              <Button
                className="profile__container-button"
                label="Удалить аккаунт"
                form="round"
                size="s"
                onClick={setDelete}
              />
              <Link to="/sign-in">
                <Button
                  className="profile__container-button"
                  label="Сменить аккаунт"
                  form="round"
                  size="s"
                />
              </Link>
              <Link to="/sign-in">
                <Button
                  className="profile__container-button"
                  label="Выйти"
                  form="round"
                  size="s"
                />
              </Link>
            </>
          ) : (
            <Button
              className="profile__container-button"
              label="Сохранить"
              form="round"
              size="s"
              onClick={handleSubmit}
            />
          )}
        </Card>
      )}
    </section>
  );
};

export default Profile;
