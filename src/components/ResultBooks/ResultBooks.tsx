import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ResultBooks.scss";
import BookCard from "../BookCard/BookCard";
import { Button } from "@consta/uikit/Button";
import BookServices from "../../utils/BookServices";

const ResultBooks: FC = ({}): React.ReactElement => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  console.log(query)
  const [books, setBooks] = useState<Book[]>()
  const [textOnPage, setTextOnPage] = useState("Найдено по вашему запросу")
  const [isLoadingBooks, setIsLoadingBooks] = useState(false)

  type Book ={
    name: string
    description: string
    image: string
    author: string
    rating: number
    _v: number
    _id: string
    postingDate: string
  }

  const getBooks = async () =>{
    if (query && query!==""){
      setIsLoadingBooks(true)
        const resp = await BookServices.bookSearch(query)
      setIsLoadingBooks(false)

      if (!isLoadingBooks){
        setBooks(resp)
        console.log(resp)
        console.log(books)
      }
        
    } else {
      setTextOnPage("Введён пустой поисковый запрос")
    }
  }

  useEffect(()=>{
    getBooks()
    if (books?.length === 0){
      setTextOnPage("По вашему запросу ничего не найдено")
    }
   }, [query])

  return (
    <section className="result-books">
      <div className="result-books__title-container">
        <h2 className="result-books__title">{textOnPage}</h2>
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
