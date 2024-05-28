import { Layout } from "@consta/uikit/Layout";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import BookCard from "../../BookCard/BookCard";
import { Tabs } from "@consta/uikit/Tabs";
import { FC, useEffect, useState } from "react";
import "./MyBooksPage.scss";
import { Button } from "@consta/uikit/Button";
import BookServices from "../../../utils/BookServices";
import { CurrentUserContext } from "../../../context/CurrentUserContext";
import React from "react";

interface IMyBooksProps {
  addBook: () => void;
}

const MyBooksPage: FC<IMyBooksProps> = ({ addBook }) => {
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const items: string[] = ["Мои книги на обмен", "Полученные при обмене"];
  const [myBooks, setMyBooks] = useState<any[]>([]);

  const getItemLabel = (label: string) => label;

  useEffect(() => {
    BookServices.getBooksByOwner(currentUser?._id || "")
      .then((data) => {
        setMyBooks(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении книг пользователя:", error);
      });
  }, []);

  const [value, setValue] = useState<string>(items[0]);
  return (
    <Layout
      direction="column"
      style={{
        flexGrow: 1,
        height: "90%",
        width: "100%",
        paddingLeft: "2%",
        paddingRight: "1.5%",
        paddingTop: "2%",
      }}
    >
      <Card
        style={{
          height: "100%",
          width: "100%",
          padding: 25,
          background: "#FFFBF5",
        }}
      >
        <Layout
          direction="row"
          style={{ paddingLeft: 10, paddingRight: 20, paddingTop: 10 }}
        >
          <Tabs
            value={value}
            onChange={setValue}
            items={items}
            getItemLabel={getItemLabel}
          ></Tabs>
          <Button
            label="Разместить книгу"
            style={{ background: "#674188" }}
            form="round"
            onClick={addBook}
          ></Button>
        </Layout>
        <hr
          style={{
            marginBottom: 20,
            height: 5,
            background: "#C3ACD0",
            borderRadius: 25,
            marginLeft: 15,
            marginRight: 20,
          }}
        ></hr>
        {value === "Мои книги на обмен" ? (
          <div style={{ height: "80%  ", width: "100%", overflowY: "auto" }}>
            {myBooks.map((book: any) => {
              return <BookCard bookData={book}></BookCard>;
            })}
          </div>
        ) : (
          <div
            style={{ height: "80%  ", width: "100%", overflowY: "auto" }}
          ></div>
        )}
      </Card>
    </Layout>
  );
};

export default MyBooksPage;
