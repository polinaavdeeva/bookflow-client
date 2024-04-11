import { TextField } from "@consta/uikit/TextField";
import { Select } from "@consta/uikit/Select";
import { User } from "@consta/uikit/User";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import { useState } from "react";
import { Link } from "react-router-dom";

import "./MainPage.scss";
import AdCard from "../../AdCard/AdCard";

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

  return (
    <div>
      <div
        style={{
          height: 32,
          width: "160vh",
          display: "inline-block",
          margin: "16px 32px 16px 32px",
        }}
      >
        <TextField
          className="search"
          type="text"
          placeholder="Поиск"
          size="s"
        />
        <Link to="/myprofile">
          <User
            avatarUrl="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"
            name="Райан Гослинг"
            info="Водитель"
            style={{ width: 175, height: 30, float: "inline-end" }}
          />
        </Link>
        <Select
          placeholder="Выберите город"
          view="clear"
          size="xs"
          items={items}
          value={value}
          onChange={setValue}
          style={{ width: 140, height: 30, float: "inline-end", marginTop: 4 }}
        />
      </div>
      <AdCard />

      <Card
        verticalSpace="xl"
        horizontalSpace="xl"
        style={{
          marginTop: 10,
          marginLeft: 15,
          marginRight: 15,
          width: "158vh",
          height: 250,
          background: "#FFFBF5",
        }}
      >
        <Text>Последнее Добавленное</Text>
      </Card>

      <Card
        verticalSpace="xl"
        horizontalSpace="xl"
        style={{
          marginTop: 10,
          marginLeft: 15,
          marginRight: 15,
          width: "158vh",
          height: 250,
          background: "#FFFBF5",
        }}
      >
        <Text>Лучший рейтинг</Text>
      </Card>
    </div>
  );
};

export default MainPage;
