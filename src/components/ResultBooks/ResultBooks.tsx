import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ResultBooks.scss";
import BookCard from "../BookCard/BookCard";
import { Button } from "@consta/uikit/Button";
import BookServices from "../../utils/BookServices";
import { NULL } from "sass";

const ResultBooks: FC = ({}): React.ReactElement => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const [books, setBooks] = useState<Array<Book>>([])
  const [textOnPage, setTextOnPage] = useState("Найдено по вашему запросу")
  const [isLoadingBooks, setIsLoadingBooks] = useState(false)
  const [sortedBooks, setSortedBooks] = useState<Array<Book>>()
  //const [ratingFilter, setRatingFilter] = useState(0)

  type Book ={
    name: string
    description: string
    image: string
    author: string
    rating: number
    id: string
    postingDate: string
  }

  const getBooks = async () =>{
    if (query && query!==""){
      setIsLoadingBooks(true)
        const resp = await BookServices.bookSearch(query)
      setIsLoadingBooks(false)

      if (!isLoadingBooks){
        let booksArr = new Array
        resp.map((el: any)=>{
          const book: Book = {
            name: el.name,
            description: el.description,
            image: el.image,
            author: el.author,
            rating: el.rating,
            id: el._id,
            postingDate: el.postingDate
          }
          booksArr.push(book)
        })
        setBooks(booksArr)
        setSortedBooks(booksArr)
      }    
      setTextOnPage("Найдено по вашему запросу")  
    } else {
      setTextOnPage("Введён пустой поисковый запрос")
    }
  }

  useEffect(()=>{
    const arr = new Array
    setBooks(arr) 
    getBooks()
   }, [query])

  const sortBooksFunc = (sortType: String)=>{
  console.log(sortType)
    const tempBooks = [...books].sort((a, b) => {
      switch (sortType) {
        case 'RATING_UP':
          return a.rating - b.rating;
        case 'RATING_DOWN':
          return b.rating - a.rating;
        case 'NAME_UP':
          return a.name.localeCompare(b.name);
        case 'NAME_DOWN':
          return b.name.localeCompare(a.name);
        default:
          return a.name.localeCompare(b.name);
      }
    });
  setSortedBooks(tempBooks)
  }

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
              onClick={()=>{sortBooksFunc("RATING_UP")}}
            />
            <Button
              className="result-books__sort-button"
              label="По убыванию рейтинга"
              form="round"
              onClick={()=>{sortBooksFunc("RATING_DOWN")}}
            />
            <Button
              className="result-books__sort-button"
              label="От А до Я"
              form="round"
              onClick={()=>{sortBooksFunc("NAME_UP")}}
            />
            <Button
              className="result-books__sort-button"
              label="От Я до А"
              form="round"
              onClick={()=>{sortBooksFunc("NAME_DOWN")}}
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
      {sortedBooks?.map((book)=>{
        return(<BookCard bookData={book}></BookCard>)
      })}
    </section>
  );
};

export default ResultBooks;
