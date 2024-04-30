import React, { FC, useState } from "react";
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
import { Link } from "react-router-dom";
import DeleteBookPopup from "../../DeletePopup/DeleteBookPopup";
import CorrectBookPopup from "../../AddBookPopup/CorrectBookPopup";

type comment = {
  text: string;
  stars: number;
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

  const [commentList, setCommentList] = useState<comment[]>([]);

  const addComment = (text: string, stars: number) => {
    const com = {
      text: text,
      stars: stars,
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
      ></FeedbackPopup>
      <DeleteBookPopup isOpen={isDeleteBookOpen} onClose={()=>setIsDeleteBookOpen(false)}/>
      <CorrectBookPopup isOpen={isCorrectBookOpen} onClose={()=>setIsCorrectBookOpen(false)}/>
      
      <div className="background"></div>
      <Card
        style={{ height: "100%" }}
        className="main-container"
        form="round"
        verticalSpace="xl"
      >
        <Layout
          direction="row"
          style={{ paddingRight: "5%", paddingLeft: "5%" }}
        >
          <img
            src="https://www.colorhexa.com/8a99a6.png"
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
              {isComplaintBookButtonShowed ?
                (!isAdmin? 
                <Button
                  label="Оставить жалобу"
                  size="xs"
                  onMouseLeave={() => setIsComplaintBookButtonShowed(false)}
                  style={{ marginLeft: -20, background: "#674188"}}
                  form="round"
                  onClick={addComplaint}
                  disabled={!isLoggedIn}
                  className="book__comment"
                  /> 
                   : 
                   (<Layout direction="column" onMouseLeave={() => setIsComplaintBookButtonShowed(false)} style={{marginTop: -15}}>
                      <Button
                      label="Редактировать"
                      size="xs"
                      style={{ marginLeft: 0, background: "#674188", marginBottom: 5}}
                      form="round"
                      onClick={()=>setIsCorrectBookOpen(true)}
                      disabled={!isLoggedIn}
                      className="book__comment"
                      /> 
                      <Button
                      label="Удалить"
                      size="xs"
                      style={{ marginLeft: 0, background: "#674188"}}
                      form="round"
                      disabled={!isLoggedIn}
                      onClick={()=>setIsDeleteBookOpen(true)}
                      className="book__comment"
                      /> 
                   </Layout>)
                )
               : 
                <Button
                  size="xs"
                  label="⋮"
                  form="round"
                  view="clear"
                  style={{ marginLeft: 145, fontSize: 25 }}
                  onMouseEnter={() => setIsComplaintBookButtonShowed(true)}
                />
              }
            </Layout>

            <Text className="item-text">Название книги</Text>
            <br />
            <br />
            <Text className="item-label">Автор</Text>
            <Text className="item-text">Автор</Text>
            <br />
            <br />
            <Text className="item-label">Рейтинг</Text>
            <Text className="item-text">
              <StarIcon></StarIcon> 4.3
            </Text>
            <br />
            <br />
            <Text className="item-label">Аннотация</Text>
            <Text className="item-text">
              Я в своем познании настолько преисполнился, что я как будто бы уже
              сто триллионов миллиардов лет проживаю на триллионах и триллионах
              таких же планет, как эта Земля, мне этот мир абсолютно понятен, и
              я здесь ищу только одного - покоя, умиротворения и вот этой
              гармонии, от слияния с бесконечно вечным, от созерцания великого
              фрактального подобия и от вот этого замечательного всеединства
              существа, бесконечно вечного, куда ни посмотри, хоть вглубь -
              бесконечно малое, хоть ввысь - бесконечное большое, понимаешь? А
              ты мне опять со своим вот этим, иди суетись дальше, это твоё
              распределение, это твой путь и твой горизонт познания и ощущения
              твоей природы, он несоизмеримо мелок по сравнению с моим,
              понимаешь? Я как будто бы уже давно глубокий старец, бессмертный,
              ну или там уже почти бессмертный, который на этой планете от её
              самого зарождения, ещё когда только Солнце только-только
              сформировалось как звезда, и вот это газопылевое облако, вот,
              после взрыва, Солнца, когда оно вспыхнуло, как звезда, начало
              формировать вот эти коацерваты, планеты, понимаешь, я на этой
              Земле уже как будто почти пять миллиардов лет живу и знаю её вдоль
              и поперёк этот весь мир, а ты мне какие-то... мне не важно на твои
              тачки, на твои яхты, на твои квартиры, там, на твоё благо.
            </Text>
            <br />
            <br />
            <Layout direction="row" style={{ display: "flex", width: "100%" }}>
              <Collapse
                label={<Text className="collapse-text">Отзывы</Text>}
                style={{ width: "100%" }}
                isOpen={isCommentsOpen}
                onClick={() => setIsCommentsOpen(!isCommentsOpen)}
              >
                <Layout direction="column" style={{ paddingLeft: 30 }}>
                  {commentList.length === 0 && (
                    <>Будьте первыми, кто оставит отзыв!</>
                  )}
                  {commentList.map((el) => {
                    return (
                      <Comment com={el} addComplaint={addComplaint} isAdmin={isAdmin}></Comment>
                    );
                  })}
                </Layout>
              </Collapse>
              <div style={{ display: "flex", width: "100%" }}></div>
              {isAdmin? "" :
              <Button
                label="Добавить отзыв"
                style={{ background: "#674188", marginTop: 10 }}
                form="round"
                onClick={() => setIsFeedbackOpen(true)}
                disabled={!isLoggedIn}
                className="book__comment"
              ></Button>
                }
            </Layout>

            <Collapse
              label={<Text className="collapse-text">Доступна для обмена</Text>}
              style={{ width: 250 }}
              isOpen={isBooksOpen}
              onClick={() => setIsBooksOpen(!isBooksOpen)}
            >
              <Layout direction="column" style={{ paddingLeft: 30 }}>
                <Layout direction="row" style={{ marginBottom: 10 }}>
                  {isLoggedIn ? (
                    <Link to="/myprofile">
                      <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
                    </Link>
                  ) : (
                    <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
                  )}

                  <Text style={{ paddingTop: 7, paddingLeft: 15 }}>
                    {" "}
                    Райан Гослинг
                  </Text>
                  <Text className="item-text" style={{ paddingLeft: 20 }}>
                    <StarIcon></StarIcon> 4.3
                  </Text>
                </Layout>

                <Layout direction="row" style={{ marginBottom: 10 }}>
                  {isLoggedIn ? (
                    <Link to="/myprofile">
                      <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
                    </Link>
                  ) : (
                    <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
                  )}
                  <Text style={{ paddingTop: 7, paddingLeft: 15 }}>
                    {" "}
                    Райан Гослинг
                  </Text>
                  <Text className="item-text" style={{ paddingLeft: 20 }}>
                    <StarIcon></StarIcon> 4.3
                  </Text>
                </Layout>

                <Layout direction="row" style={{ marginBottom: 10 }}>
                  {isLoggedIn ? (
                    <Link to="/myprofile">
                      <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
                    </Link>
                  ) : (
                    <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
                  )}
                  <Text style={{ paddingTop: 7, paddingLeft: 15 }}>
                    {" "}
                    Райан Гослинг
                  </Text>
                  <Text className="item-text" style={{ paddingLeft: 20 }}>
                    <StarIcon></StarIcon> 4.3
                  </Text>
                </Layout>
              </Layout>
            </Collapse>
          </Layout>
        </Layout>
      </Card>
    </section>
  );
};

export default BookPage;
