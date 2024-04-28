import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import "./ResultBooks.scss";
import BookCard from "../BookCard/BookCard";
import { Button } from "@consta/uikit/Button";

const ResultBooks: FC = ({}): React.ReactElement => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  return (
    <section className="result-books">
      <div className="result-books__title-container">
        <h2 className="result-books__title">Найдено по вашему запросу</h2>
        <div className="result-books__sort-container">
          <Button
            className="result-books__sort-button"
            label="Сортировать"
            form="round"
          />
          <div className="result-books__sort-buttons-container">
            <Button
              className="result-books__sort-button"
              label="По возрастанию рейтинга"
              form="round"
            />
            <Button
              className="result-books__sort-button"
              label="По убыванию рейтинга"
              form="round"
            />
            <Button
              className="result-books__sort-button"
              label="От А до Я"
              form="round"
            />
            <Button
              className="result-books__sort-button"
              label="От Я до А"
              form="round"
            />
          </div>
        </div>
      </div>
      <div className="result-books__filter-container">
        <p className="result-books__filter-title">Фильтр</p>
        <div className="result-books__rating-container">
          <p className="result-books__rating-title">Рейтинг выше:</p>
          <div className="result-books__number">1</div>
          <div className="result-books__number">2</div>
          <div className="result-books__number">3</div>
          <div className="result-books__number">4</div>
        </div>
        <div className="result-books__status-container">
          <p className="result-books__status-title">Статус:</p>
          <Button
            className="result-books__status-button"
            label="Доступно для обмена"
            form="round"
          />
        </div>
      </div>
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
      <BookCard></BookCard>
      <BookCard></BookCard>
    </section>
  );
};

export default ResultBooks;
