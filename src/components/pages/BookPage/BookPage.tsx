import React, { FC, useEffect, useState } from "react";
import { Avatar } from "@consta/uikit/Avatar";
import { Card } from "@consta/uikit/Card";
import { Button } from "@consta/uikit/Button";
import "./BookPage.scss";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import StarIcon from "../../../assets/starIcon";
import { Collapse } from "@consta/uikit/Collapse";
import Comment from "../../Comment/Comment";
import FeedbackPopup from "../../FeedbackPopup/FeedbackPopup";
import { Link, useSearchParams } from "react-router-dom";
import DeleteBookPopup from "../../DeletePopup/DeleteBookPopup";
import CorrectBookPopup from "../../AddBookPopup/CorrectBookPopup";
import { useLocation } from "react-router-dom";
import BookServices from "../../../utils/BookServices";
import { commentApi } from "../../../utils/CommentApi";
import { User } from "@consta/uikit/User";
import { userApi } from "../../../utils/UserApi";
import defaultAvatar from "../../../assets/аватарка_по-умолчанию.png";

type comment = {
  _id: string;
  content: string;
  stars: number;
  author: string;
};

type Book = {
  name: string;
  description: string;
  image: string;
  author: string;
  rating: number;
  id: string;
  postingDate: string;
};

type UserInfo = {
  user: any;
  name: string;
  lastName: string;
  rating: number;
  _id: string;
  email: string;
};

interface IBook {
  addComplaint: () => void;
  addFeedback: () => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
}

const BookPage: FC<IBook> = ({
  addComplaint,
  addFeedback,
  isLoggedIn,
  isAdmin,
}) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);
  const [isBooksOpen, setIsBooksOpen] = useState<boolean>(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);
  const [isDeleteBookOpen, setIsDeleteBookOpen] = useState<boolean>(false);
  const [isCorrectBookOpen, setIsCorrectBookOpen] = useState<boolean>(false);
  const [isComplaintBookButtonShowed, setIsComplaintBookButtonShowed] =
    useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const bookId = searchParams.get("id");
  const [bookInfo, setBookInfo] = useState<Book>();
  const [imageSrc, setImageSrc] = useState("");
  const [commentList, setCommentList] = useState<comment[]>([]);
  const [ownersInfo, setOwnersInfo] = useState<UserInfo[]>([]);
  const [getBookModalOpen, setGetBookModalOpen] = useState(false);
  const [ownerInfoInModal, setOwnerInfoInModal] = useState<UserInfo>();

  const findBookInfo = async () => {
    setOwnersInfo([]);
    try {
      await BookServices.getBookById(bookId).then((resp) => {
        setOwnersInfo([]);
        setBookInfo(resp);
        let copy: any | UserInfo[] = [];
        resp.owner.map((owner: string) => {
          userApi
            .getUserById(owner)
            .then((res) => {
              copy?.push(res);
            })
            .catch(() => console.log("something is wrong"));
        });
        setOwnersInfo(copy);
      });
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
  };

  const fetchImage = async () => {
    try {
      const imageBlob = await BookServices.getBookImage(bookId);
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageSrc(imageUrl);
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
  };

  const getComments = async () => {
    await commentApi.getAllCommentsForBook(bookId).then((resp) => {
      setCommentList(resp);
    });
  };

  useEffect(() => {
    findBookInfo();
    fetchImage();
    getComments();
  }, [bookId, ownerInfoInModal]);

  useEffect(() => {
    getComments();
  }, []);

  const addComment = (text: string, stars: number) => {
    const com = {
      _id: "comment_id",
      content: text,
      stars: stars,
      author: "author",
    };
    let copy = commentList;
    copy.push(com);
    setCommentList(copy);
  };

  return (
    <section className="book">
      <FeedbackPopup
        isOpen={isFeedbackOpen}
        setIsOpen={setIsFeedbackOpen}
        addComment={addComment}
        bookId={bookId}
      ></FeedbackPopup>
      <DeleteBookPopup
        bookId={bookId}
        isOpen={isDeleteBookOpen}
        onClose={() => setIsDeleteBookOpen(false)}
      />
      <CorrectBookPopup
        isOpen={isCorrectBookOpen}
        onClose={() => setIsCorrectBookOpen(false)}
      />

      <div className="background"></div>
      <Card
        style={{ height: "100%" }}
        className="main-container"
        form="round"
        verticalSpace="xl"
      >
        <Layout
          direction="row"
          style={{ paddingRight: "0%", paddingLeft: "5%" }}
        >
          <img
            src={imageSrc}
            style={{
              width: 180,
              height: 280,
              borderRadius: "20px 20px 20px 20px",
            }}
          ></img>
          <Layout direction="column" style={{ paddingLeft: 40 }}>
            <Layout direction="row" style={{ width: "100%" }}>
              <Text className="item-label" style={{ width: "20%" }}>
                Название книги
              </Text>
              <Layout style={{ width: "100%" }}></Layout>
              {isComplaintBookButtonShowed ? (
                !isAdmin ? (
                  <Button
                    label="Оставить жалобу"
                    size="xs"
                    onMouseLeave={() => setIsComplaintBookButtonShowed(false)}
                    style={{ marginLeft: -20, background: "#674188" }}
                    form="round"
                    onClick={addComplaint}
                    disabled={!isLoggedIn}
                    className="book__comment"
                  />
                ) : (
                  <Layout
                    direction="column"
                    onMouseLeave={() => setIsComplaintBookButtonShowed(false)}
                    style={{ marginTop: -15 }}
                  >
                    <Button
                      label="Удалить"
                      size="xs"
                      style={{ marginLeft: 0, background: "#674188" }}
                      form="round"
                      disabled={!isLoggedIn}
                      onClick={() => setIsDeleteBookOpen(true)}
                      className="book__comment"
                    />
                  </Layout>
                )
              ) : (
                <Button
                  size="xs"
                  label="⋮"
                  form="round"
                  view="clear"
                  style={{ marginLeft: 145, fontSize: 25 }}
                  onMouseEnter={() => setIsComplaintBookButtonShowed(true)}
                />
              )}
            </Layout>

            <Text className="item-text">{bookInfo?.name}</Text>
            <br />
            <br />
            <Text className="item-label">Автор</Text>
            <Text className="item-text">{bookInfo?.author}</Text>
            <br />
            <br />
            <Text className="item-label">Рейтинг</Text>
            <Text className="item-text">
              <StarIcon></StarIcon> {bookInfo?.rating}
            </Text>
            <br />
            <br />
            <Text className="item-label">Аннотация</Text>
            <Text className="item-text" style={{ width: "60vw" }}>
              {bookInfo?.description}
            </Text>
            <br />
            <br />
            <Layout direction="row" style={{ display: "flex", width: "98%" }}>
              <Collapse
                label={<Text className="collapse-text">Отзывы</Text>}
                style={{ width: "90%" }}
                isOpen={isCommentsOpen}
                onClick={() => setIsCommentsOpen(!isCommentsOpen)}
              >
                <Layout direction="column" style={{ paddingLeft: 30 }}>
                  {commentList.length === 0 && (
                    <>Будьте первыми, кто оставит отзыв!</>
                  )}
                  {commentList.map((el) => {
                    return (
                      <Comment
                        com={el}
                        addComplaint={addComplaint}
                        isAdmin={isAdmin}
                      ></Comment>
                    );
                  })}
                </Layout>
              </Collapse>
              <div style={{ display: "flex", width: "100%" }}></div>
              <Button
                label="Добавить отзыв"
                style={{ background: "#674188", marginTop: 10 }}
                form="round"
                onClick={() => setIsFeedbackOpen(true)}
                disabled={!isLoggedIn || isAdmin}
                className="book__comment"
              ></Button>
            </Layout>

            <Collapse
              label={<Text className="collapse-text">Доступна для обмена</Text>}
              style={{ width: 250 }}
              isOpen={isBooksOpen}
              onClick={() => setIsBooksOpen(!isBooksOpen)}
            >
              <Layout direction="column" style={{ paddingLeft: 30 }}>
                {ownersInfo?.map((ownerInfo) => {
                 
                    let avatarUrl = ""
                    userApi.getUserAvatar(ownerInfo._id).then(
                        (resp)=>{
                          const avUrl= URL.createObjectURL(resp);    
                          if (resp.type !== 'application/json'){
                            avatarUrl = avUrl
                          }
                        }
                      )
                    
                
              return(

                <Layout direction="row" style={{ marginBottom: 10}}>
                  {isLoggedIn ? (
                    <Link to="/myprofile">
                      <Avatar url={avatarUrl && avatarUrl !== "" ? avatarUrl : defaultAvatar}></Avatar>
                    </Link>
                  ) : (
                    <Avatar url={avatarUrl && avatarUrl !== "" ? avatarUrl : defaultAvatar}></Avatar>
                  )}


                      <Text
                        style={{ paddingTop: 7, paddingLeft: 15, width: 140 }}
                      >
                        {" "}
                        {ownerInfo.user.name + " " + ownerInfo.user.lastName}
                      </Text>
                      <Text className="item-text" style={{ paddingLeft: 20 }}>
                        <StarIcon></StarIcon> {ownerInfo.user.rating}
                      </Text>
                      <Button
                        label="получить"
                        onClick={() => {
                          BookServices.receiveBook(
                            bookId,
                            ownerInfo.user._id
                          ).then(() => {
                            setOwnerInfoInModal(ownerInfo.user);
                            setGetBookModalOpen(true);
                          });
                        }}
                        size="xs"
                        style={{
                          marginLeft: 10,
                          marginTop: 5,
                          background: "#674188",
                        }}
                        form="round"
                      />
                    </Layout>
                  );
                })}
              </Layout>
            </Collapse>
          </Layout>
        </Layout>
      </Card>

      <section className={`popup ${getBookModalOpen ? "popup_opened" : ""}`}>
        <div className="popup__container" style={{ width: 600, height: 220 }}>
          <h2 className="popup__title">Получение книги</h2>
          <div style={{ textAlign: "center", paddingBottom: 3 }}>
            Благодорим вас за приобретение книги.
          </div>
          <div style={{ textAlign: "center", paddingBottom: 3 }}>
            Для получения книги свяжитесь с её владельцем:
          </div>
          <div
            style={{ textAlign: "center", paddingBottom: 30, color: "#674188" }}
          >
            {ownerInfoInModal?.email}
          </div>
          <Button
            className="popup__add-button"
            label="Хорошо"
            form="round"
            onClick={() => {
              setGetBookModalOpen(false);
            }}
          />
        </div>
      </section>
    </section>
  );
};

export default BookPage;
