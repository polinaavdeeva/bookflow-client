import React, { FC, useEffect, useRef, useState } from "react";
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
import { Text } from "@consta/uikit/Text";
import { Layout } from "@consta/uikit/Layout";
import BookCard from "../../BookCard/BookCard";
import BookServices from "../../../utils/BookServices";

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
  const [avatarUrl, setAvatarUrl] = useState<string|undefined>("")

  const fetchUserInfo = async () => {
    if (id) {
      const data = await userApi.getUserById(id);
      setUserInfo(data.user);
      setAvatarUrl(data.user.avatar)
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

  const formatDate = (date: Date | string): string => {
    const newDate = new Date(date);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  };

  

  //раздел добавленных книг
  const containerLastAddedRef = useRef<HTMLDivElement>(null);
  const [lastAddedBooks, setLastAddedBooks] = useState<Array<Book>>([]);

  type Book = {
    name: string;
    description: string;
    image: string;
    author: string;
    rating: number;
    id: string;
    postingDate: string;
  };

  const scrollLeftLastAdded = () => {
    if (containerLastAddedRef.current) {
      containerLastAddedRef.current.scrollBy({
        left: -196,
        behavior: "smooth",
      });
    }
  };

  const scrollRightLastAdded = () => {
    if (containerLastAddedRef.current) {
      containerLastAddedRef.current.scrollBy({
        left: 196,
        behavior: "smooth",
      });
    }
  };

  useEffect(()=>{
    BookServices.getBooksByOwner(id? id: "0").then(
      (resp)=>{
        setLastAddedBooks(resp)
      }
    )
  }, [id])

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
            url={avatarUrl&& avatarUrl !== "" ? avatarUrl : defaultAvatar}
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
              <p className="profile__text">{formatDate(userInfo?.dateOfBirth)}</p>
            </div>
          </div>
          <div className="profile__info-column">
            <div className="profile__info-row">
              <label className="profile__item-label">Дата регистрации</label>
              <p className="profile__text">{formatDate(userInfo?.registrationDate)}</p>
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
      <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            style={{
              marginTop: 10,
              marginLeft: 30,
              marginRight: 10,
              height: "max",
              width: "95%",
              background: "#FFFBF5",
            }}
          >
            <Text className="division-text">Добавлено пользователем</Text>
            <Layout direction="row" style={{ width: "100%", height: 270 }}>
              <Button
                label="❰"
                view="ghost"
                style={{ height: "100%", background: "none", color: "#674188" }}
                onClick={scrollLeftLastAdded}
              ></Button>
              <div
                ref={containerLastAddedRef}
                style={{
                  display: "flex",
                  width: "calc(80vw - 120px)",
                  overflowX: "hidden",
                }}
              >
                {lastAddedBooks?.map((book) => {
                  return <BookCard bookData={book}></BookCard>;
                })}
              </div>
              <Button
                label="❱"
                view="ghost"
                style={{ height: "100%", background: "none", color: "#674188" }}
                onClick={scrollRightLastAdded}
              ></Button>
            </Layout>
          </Card>
    </section>
  );
};

export default OtherProfile;
