import React, { FC, useState } from "react";
import { Button } from "@consta/uikit/Button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./StatisticPage.scss";

interface Item {
  name: string;
  month: string;
  value: number;
}

const StatisticPage: FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("books");
  const [chartData, setChartData] = useState<Item[]>([]);

  const dataBooks: Item[] = [
    { name: "Понедельник", month: "Количество книг в обмене", value: 0 },
    { name: "Вторник", month: "Количество книг в обмене", value: 0 },
    { name: "Среда", month: "Количество книг в обмене", value: 0 },
    { name: "Четверг", month: "Количество книг в обмене", value: 3 },
    { name: "Пятица", month: "Количество книг в обмене", value: 1 },
    { name: "Суббота", month: "Количество книг в обмене", value: 0 },
    { name: "Воскресенье", month: "Количество книг в обмене", value: 0 },
  ];

  const dataUsers: Item[] = [
    { name: "Понедельние", month: "Количество новых пользователей", value: 0 },
    { name: "Вторник", month: "Количество новых пользователей", value: 0 },
    { name: "Среда", month: "Количество новых пользователей", value: 0 },
    { name: "Четверг", month: "Количество новых пользователей", value: 7 },
    { name: "Пятница", month: "Количество новых пользователей", value: 1 },
    { name: "Суббота", month: "Количество новых пользователей", value: 0 },
    { name: "Воскресенье", month: "Количество новых пользователей", value: 0 },
  ];

  const dataNewBooks: Item[] = [
    { name: "Понедельник", month: "Количество новых карточек книг", value: 0 },
    { name: "Вторник", month: "Количество новых карточек книг", value: 0 },
    { name: "Среда", month: "Количество новых карточек книг", value: 0 },
    { name: "Четверг", month: "Количество новых карточек книг", value: 7 },
    { name: "Пятница", month: "Количество новых карточек книг", value: 1 },
    { name: "Суббота", month: "Количество новых карточек книг", value: 0 },
    { name: "Воскресенье", month: "Количество новых карточек книг", value: 0 },
  ];

  const handleSectionChange = (section: string) => {
    switch (section) {
      case "books":
        setChartData(dataBooks);
        break;
      case "users":
        setChartData(dataUsers);
        break;
      case "newBooks":
        setChartData(dataNewBooks);
        break;
      default:
        setChartData(dataBooks);
        break;
    }
    setCurrentSection(section);
  };

  React.useEffect(() => {
    handleSectionChange("books");
  }, []);

  return (
    <section className="statistic-page">
      <h2 className="statistic-page__title">Статистика</h2>
      <div className="statistic-page__button-container">
        <Button
          className="statistic-page__button"
          label="Количество книг в обмене"
          size="s"
          onClick={() => handleSectionChange("books")}
        />
        <Button
          className="statistic-page__button"
          label="Количество новых пользователей"
          size="s"
          onClick={() => handleSectionChange("users")}
        />
        <Button
          className="statistic-page__button"
          label="Количество новых карточек книг"
          size="s"
          onClick={() => handleSectionChange("newBooks")}
        />
      </div>
      <div className="statistic-page__border"></div>
      <div className="statistic-page__chart">
        <ResponsiveContainer width="100%" height={100}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              fill="#674188"
              name={chartData[0]?.month || ""}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="statistic-page__chart-buttons"></div>
    </section>
  );
};

export default StatisticPage;
