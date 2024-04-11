import { TextField } from "@consta/uikit/TextField";
import { Select } from "@consta/uikit/Select";
import { User } from "@consta/uikit/User";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import { useRef, useState } from "react";

import "./MainPage.scss";
import AdCard from "../../AdCard/AdCard";
import { Layout } from "@consta/uikit/Layout";
import BookCard from "../../BookCard/BookCard";

const MainPage = () => {
  type Item = {
    label: string;
    id: number;
  };

  const items: Item[] = [
    {
      label: "Воронеж",
      id: 1,
    },
    {
      label: "Москва",
      id: 2,
    },
    {
      label: "Нью Йорк",
      id: 3,
    },
  ];

  const [value, setValue] = useState<Item | null>();

  const containerRef = useRef<HTMLDivElement>(null);

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
    <div>
      <div style={{height: 32, minWidth: 1200, width: "82vw", display: "inline-flex", margin: "16px 0px 16px 24px"}}>
        <TextField
          className="Search"
          type="text"
          placeholder="Поиск"
          size="s"
        />
        
        <div style={{float: "inline-end", display: "flex", paddingRight: 24}}> 
          <Select
            placeholder="Выберите город"
            view="clear"
            size="xs"
            items={items}
            value={value}
            onChange={setValue}
            style={{ width: 140, height: 30, marginTop: 4, paddingRight: 20}} 
            className="myInput"
          />
          <User
            avatarUrl="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"
            name="Райан Гослинг"
            info="Водитель"
            style={{ width: "12vw", height: 30}}
          /> 
        </div>

      </div>

      <AdCard />

      <Card
        verticalSpace="xl"
        horizontalSpace="xl"
        style={{
          marginTop: 10,
          marginLeft: 15,
          marginRight: 15,
          width: "82vw",
          height: "hug",
          background: "#FFFBF5",    
        }}
      >
        <Text className="division-text">Последнее Добавленное</Text>
        <div style={{overflowX: "auto"}}>
          <div style={{whiteSpace: "nowrap"}}>
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
          width: "82vw",
          height: "hug",
          background: "#FFFBF5",    
        }}
      >
        <Text className="division-text">Лучший рейтинг</Text>
        <div style={{overflowX: "auto"}}>
          <div style={{whiteSpace: "nowrap"}}>
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
    </div>
  );
};

export default MainPage;
