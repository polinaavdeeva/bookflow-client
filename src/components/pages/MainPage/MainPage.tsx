import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import { useRef, useState} from "react";

import "./MainPage.scss";
import AdCard from "../../AdCard/AdCard";
import BookCard from "../../BookCard/BookCard";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{flexGrow: 1, height: "115%", width: "100%"}}>
      <AdCard url1="" url2="" url3="" />
      {isAdmin? 
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
          <br/>
        <Text className="small-text">Сейчас на сайте</Text>
          <br/>
        <Layout direction="column">
          <Layout direction="row">
            <Layout style={{width: "60%"}}>
              <AdCard url1="" url2="" url3=""></AdCard>
            </Layout>
            <Layout direction="row" style={{width: "40%", paddingTop: "6%", paddingLeft: "2%"}}>
              <Button label="Изменить изображение" style={{width: "max-content", background: "#674188", marginRight: 15}} form="round"></Button>
              <Button label="Удалить слайд " style={{width: "max-content", background: "#674188"}} form="round"></Button>
            </Layout>
          </Layout>
          <br/>
          <Layout direction="row">
            <Layout style={{width: "60%"}}>
              <AdCard url1="" url2="" url3=""></AdCard>
            </Layout>
            <Layout direction="row" style={{width: "40%", paddingTop: "6%", paddingLeft: "2%"}}>
              <Button label="Изменить изображение" style={{width: "max-content", background: "#674188", marginRight: 15}} form="round"></Button>
              <Button label="Удалить слайд " style={{width: "max-content", background: "#674188"}} form="round"></Button>
            </Layout>
          </Layout>
          <br/>
          <Layout direction="row">
            <Layout style={{width: "60%"}}>
              <AdCard url1="" url2="" url3=""></AdCard>
            </Layout>
            <Layout direction="row" style={{width: "40%", paddingTop: "6%", paddingLeft: "2%"}}>
              <Button label="Изменить изображение" style={{width: "max-content", background: "#674188", marginRight: 15}} form="round"></Button>
              <Button label="Удалить слайд " style={{width: "max-content", background: "#674188"}} form="round"></Button>
            </Layout>
          </Layout>
          <br/>
          <Button label="Добавить слайд" style={{width: "15%", background: "#674188"}} form="round"></Button>
          
        </Layout>
      </Card>
      : 
      <>
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
        <Text className="division-text">Последнее Добавленное</Text>
        <div style={{width:"90%"}}>
          <div style={{display: "flex", marginLeft: 40, marginRight: 40, width: "calc(80vw - 120px)", overflowX: "auto"}}>
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
        </div> 
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
        <div style={{width:"90%"}}>
          <div style={{display: "flex", marginLeft: 40, marginRight: 40, width: "calc(80vw - 120px)", overflowX: "auto"}}>
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
        </div>   
      </Card>
    </>
    }
    </div>
  );
};

export default MainPage;
