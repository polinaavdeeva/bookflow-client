import React, { FC, useState } from "react";
import { Button } from "@consta/uikit/Button";
import { Chart, Bars } from "rumble-charts";
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
    { name: "Январь", month: "Количество книг в обмене", value: 50 },
    { name: "Февраль", month: "Количество книг в обмене", value: 150 },
    { name: "Март", month: "Количество книг в обмене", value: 300 },
    { name: "Апрель", month: "Количество книг в обмене", value: 100 },
    { name: "Май", month: "Количество книг в обмене", value: 200 },
  ];

  const dataUsers: Item[] = [
    { name: "Январь", month: "Количество новых пользователей", value: 100 },
    { name: "Февраль", month: "Количество новых пользователей", value: 300 },
    { name: "Март", month: "Количество новых пользователей", value: 300 },
    { name: "Апрель", month: "Количество новых пользователей", value: 50 },
    { name: "Май", month: "Количество новых пользователей", value: 200 },
  ];

  const dataNewBooks: Item[] = [
    { name: "Январь", month: "Количество новых карточек книг", value: 500 },
    { name: "Февраль", month: "Количество новых карточек книг", value: 200 },
    { name: "Март", month: "Количество новых карточек книг", value: 350 },
    { name: "Апрель", month: "Количество новых карточек книг", value: 150 },
    { name: "Май", month: "Количество новых карточек книг", value: 200 },
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
        <Chart
          height={300}
          minY={0}
          series={[
            {
              data: chartData.map((item) => item.value),
            },
          ]}
          width={400}
        >
          <Bars groupPadding="3%" innerPadding="0.5%" />
        </Chart>
      </div>
      <div className="statistic-page__chart-buttons">
        <Button
          className="statistic-page__chart-button"
          label="Неделя"
          size="s"
        />
        <Button
          className="statistic-page__chart-button"
          label="Месяц"
          size="s"
        />
        <Button className="statistic-page__chart-button" label="Год" size="s" />
      </div>
    </section>
  );
};

export default StatisticPage;
