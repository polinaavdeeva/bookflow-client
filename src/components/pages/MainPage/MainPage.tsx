import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import { FC, useRef, useState } from "react";

import "./MainPage.scss";
import AdCard from "../../AdCard/AdCard";
import BookCard from "../../BookCard/BookCard";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";

interface IMainPage {
  isAdmin: boolean;
}

const MainPage: FC<IMainPage> = ({ isAdmin }) => {
  const containerLastAddedRef = useRef<HTMLDivElement>(null);
  const containerBestRef = useRef<HTMLDivElement>(null);

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

  const scrollLeftBest = () => {
    if (containerBestRef.current) {
      containerBestRef.current.scrollBy({
        left: -196,
        behavior: "smooth",
      });
    }
  };

  const scrollRightBest = () => {
    if (containerBestRef.current) {
      containerBestRef.current.scrollBy({
        left: 196,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ flexGrow: 1, height: "115%", width: "100%" }}>
      <AdCard 
        url1="https://idnu.ru/upload/iblock/610/610a9969112cb5ff84629d7cab4b3d04.png" 
        url2="https://avatars.mds.yandex.net/i?id=e72f1aa1fb000d2e37a639ded5f24224103dea02-8287363-images-thumbs&ref=rim&n=33&w=480&h=167" 
        url3="https://toyota-faq.ru/wp-content/uploads/b/d/a/bda2df013c227bdeb9106c8b6909ba7b.jpeg" />

      {isAdmin ? (
        <Card
          verticalSpace="xl"
          horizontalSpace="xl"
          style={{
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
            height: "hug",
            background: "#FFFBF5",
          }}
        >
          <Text className="division-text">Настройка рекламных баннеров</Text>
          <br />
          <Text className="small-text">Сейчас на сайте</Text>
          <br />
          <Layout direction="column">
            <Layout direction="row">
              <Layout style={{ width: "60%" }}>
                <AdCard url1="" url2="" url3=""></AdCard>
              </Layout>
              <Layout
                direction="row"
                style={{ width: "40%", paddingTop: "6%", paddingLeft: "2%" }}
              >
                <Button
                  label="Изменить изображение"
                  style={{
                    width: "max-content",
                    background: "#674188",
                    marginRight: 15,
                  }}
                  form="round"
                ></Button>
                <Button
                  label="Удалить слайд "
                  style={{ width: "max-content", background: "#674188" }}
                  form="round"
                ></Button>
              </Layout>
            </Layout>
            <br />
            <Layout direction="row">
              <Layout style={{ width: "60%" }}>
                <AdCard url1="" url2="" url3=""></AdCard>
              </Layout>
              <Layout
                direction="row"
                style={{ width: "40%", paddingTop: "6%", paddingLeft: "2%" }}
              >
                <Button
                  label="Изменить изображение"
                  style={{
                    width: "max-content",
                    background: "#674188",
                    marginRight: 15,
                  }}
                  form="round"
                ></Button>
                <Button
                  label="Удалить слайд "
                  style={{ width: "max-content", background: "#674188" }}
                  form="round"
                ></Button>
              </Layout>
            </Layout>
            <br />
            <Layout direction="row">
              <Layout style={{ width: "60%" }}>
                <AdCard url1="" url2="" url3=""></AdCard>
              </Layout>
              <Layout
                direction="row"
                style={{ width: "40%", paddingTop: "6%", paddingLeft: "2%" }}
              >
                <Button
                  label="Изменить изображение"
                  style={{
                    width: "max-content",
                    background: "#674188",
                    marginRight: 15,
                  }}
                  form="round"
                ></Button>
                <Button
                  label="Удалить слайд "
                  style={{ width: "max-content", background: "#674188" }}
                  form="round"
                ></Button>
              </Layout>
            </Layout>
            <br />
            <Button
              label="Добавить слайд"
              style={{ width: "15%", background: "#674188" }}
              form="round"
            ></Button>
          </Layout>
        </Card>
      ) : (
        <>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            style={{
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
              height: "max",
              background: "#FFFBF5",
            }}
          >
            <Text className="division-text">Последнее Добавленное</Text>
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
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
              </div>
              <Button
                label="❱"
                view="ghost"
                style={{ height: "100%", background: "none", color: "#674188" }}
                onClick={scrollRightLastAdded}
              ></Button>
            </Layout>
          </Card>

          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            style={{
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
              height: "hug",
              background: "#FFFBF5",
            }}
          >
            <Text className="division-text">Лучший рейтинг</Text>
            <Layout direction="row" style={{ width: "100%", height: 270 }}>
              <Button
                label="❰"
                view="ghost"
                style={{ height: "100%", background: "none", color: "#674188" }}
                onClick={scrollLeftBest}
              ></Button>
              <div
                ref={containerBestRef}
                style={{
                  display: "flex",
                  width: "calc(80vw - 120px)",
                  overflowX: "hidden",
                }}
              >
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
              </div>
              <Button
                label="❱"
                view="ghost"
                style={{ height: "100%", background: "none", color: "#674188" }}
                onClick={scrollRightBest}
              ></Button>
            </Layout>
          </Card>
        </>
      )}
    </div>
  );
};

export default MainPage;
