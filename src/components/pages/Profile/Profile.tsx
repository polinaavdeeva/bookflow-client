import React, { FC, useState } from "react";
import "./Profile.scss";
import { Avatar } from "@consta/uikit/Avatar";
import { Card } from "@consta/uikit/Card";
import { Button } from "@consta/uikit/Button";
import { DatePicker } from "@consta/uikit/DatePicker";
import defaultAvatar from "../../../assets/аватарка_по-умолчанию.png";
import ratingStar from "../../../assets/рейтинг.png";

const Profile: FC = (): React.ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Райан");
  const [lastName, setLastName] = useState("Гослинг");
  const [patronymic, setPatronymic] = useState("Райанович");
  const [gender, setGender] = useState("Мужской");
  const [email, setEmail] = useState("gosling@gmail.com");
  const [dateOfRegistration, setDateOfRegistration] = useState("10.04.2024");
  const [dateOfBirth, setDateOfBirth] = useState("01.01.1990");
  const [rating, setRating] = useState("4.93");
  const [data, setData] = useState<Date | null>(null);
  const [registerData, setRegisterData] = useState<Date | null>(null);

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
            url={defaultAvatar}
          />
          <h2 className="profile__name">Райан Гослинг</h2>
          <span className="profile__name-role"> — Читатель</span>
        </div>
        <Button
          className="profile__edit-button"
          label="Редактировать"
          form="round"
          onClick={() => setIsEditing(!isEditing)}
        />
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
                <DatePicker
                  id="dateOfBirth"
                  className="profile__data"
                  value={data}
                  onChange={setData}
                />
              ) : (
                <p className="profile__text">{data?.toLocaleDateString()}</p>
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
              {isEditing ? (
                <DatePicker
                  id="dateOfRegister"
                  className="profile__data"
                  value={registerData}
                  onChange={setRegisterData}
                />
              ) : (
                <p className="profile__text">
                  {registerData?.toLocaleDateString()}
                </p>
              )}
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
            />
            <Button
              className="profile__container-button"
              label="Сменить аккаунт"
              form="round"
              size="s"
            />
            <Button
              className="profile__container-button"
              label="Выйти"
              form="round"
              size="s"
            />
          </>
        ) : (
          <Button
            className="profile__container-button"
            label="Сохранить"
            form="round"
            size="s"
          />
        )}
      </Card>
    </section>
  );
};

export default Profile;
