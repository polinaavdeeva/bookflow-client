import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import { FC, SetStateAction, useEffect, useRef, useState } from "react";

import "./MainPage.scss";
import AdCard from "../../AdCard/AdCard";
import BookCard from "../../BookCard/BookCard";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import BookServices from "../../../utils/BookServices";
import AdsServices from "../../../utils/AdsServices";

interface IMainPage {
  isAdmin: boolean;
}

const MainPage: FC<IMainPage> = ({ isAdmin }) => {
  const containerLastAddedRef = useRef<HTMLDivElement>(null);
  const containerBestRef = useRef<HTMLDivElement>(null);

  const [books, setBooks] = useState<Array<Book>>([]);
  const [lastAddedBooks, setLastAddedBooks] = useState<Array<Book>>([]);
  const [bestBooks, setBestBooks] = useState<Array<Book>>([]);

  type Book = {
    name: string;
    description: string;
    image: string;
    author: string;
    rating: number;
    id: string;
    postingDate: string;
  };

  const getBooks = async () => {
    const resp = await BookServices.bookSearch(" ");

    let booksArr = new Array();
    resp.map((el: any) => {
      const book: Book = {
        name: el.name,
        description: el.description,
        image: el.image,
        author: el.author,
        rating: el.rating,
        id: el._id,
        postingDate: el.postingDate,
      };
      booksArr.push(book);
    });
    setBooks(booksArr);
  };

  const sortByPostingDate = (books: Book[]) => {
    setLastAddedBooks(
      [...books]
        .sort(
          (a, b) =>
            new Date(b.postingDate).getTime() -
            new Date(a.postingDate).getTime()
        )
        .reverse()
        .slice(0, 10)
    );
  };

  const sortByRating = (books: Book[]) => {
    setBestBooks([...books].sort((a, b) => b.rating - a.rating).slice(0, 10));
  };

  useEffect(() => {
    setBooks([]);
    getBooks();
  }, []);

  useEffect(() => {
    sortByPostingDate(books);
    sortByRating(books);
  }, [books]);

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

  //элементы управления рекламой
  const [images, setImages] = useState(["", "", ""]);
  const [imageUpdated, setImageUpdated] = useState(false);
  const baseUrl = "https://bookflow-api.vercel.app/";

  const fetchImages = async () => {
    try {
      const arr = [];
      const image1Blob = AdsServices.getAdsSlide(0);
      const image1Url = URL.createObjectURL(await image1Blob);
      arr[0] = image1Url;
      const image2Blob = AdsServices.getAdsSlide(1);
      const image2Url = URL.createObjectURL(await image2Blob);
      arr[1] = image2Url;
      const image3Blob = AdsServices.getAdsSlide(2);
      const image3Url = URL.createObjectURL(await image3Blob);
      arr[2] = image3Url;
      setImages(arr);
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [imageUpdated]);

  const updateImage = (index: any, newImage: any) => {
    setImageUpdated(!imageUpdated);
    const newImages = [...images];
    newImages[index] = newImage;
    //setImages(newImages);
  };

  const handleFileChange = (event: any, index: any) => {
    console.log(index);
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("number", index.toString());

    fetch(`${baseUrl}/ads`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        updateImage(index, data.filePath);
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  return (
    <div style={{ flexGrow: 1, height: "115%", width: "100%" }}>
      <AdCard url1={images[0]} url2={images[1]} url3={images[2]} />

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
            <div className="image-editor">
              <div className="image-container">
                <img
                  src={
                    images[0] ||
                    "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg  "
                  }
                  alt={`image-${1}`}
                  className="image"
                />
                <label htmlFor="file-input1" className="custom-file-upload">
                  Изменить изображение
                </label>
                <input
                  id="file-input1"
                  style={{ display: "none" }}
                  type="file"
                  onChange={(event) => handleFileChange(event, "1")}
                  className="file-input"
                />
              </div>

              <div className="image-container">
                <img
                  src={
                    images[1] ||
                    "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg  "
                  }
                  alt={`image-${2}`}
                  className="image"
                />
                <label htmlFor="file-input2" className="custom-file-upload">
                  Изменить изображение
                </label>
                <input
                  id="file-input2"
                  style={{ display: "none" }}
                  type="file"
                  onChange={(event) => handleFileChange(event, "2")}
                  className="file-input"
                />
              </div>

              <div className="image-container">
                <img
                  src={
                    images[2] ||
                    "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg  "
                  }
                  alt={`image-${3}`}
                  className="image"
                />
                <label htmlFor="file-input3" className="custom-file-upload">
                  Изменить изображение
                </label>
                <input
                  id="file-input3"
                  style={{ display: "none" }}
                  type="file"
                  onChange={(event) => handleFileChange(event, "3")}
                  className="file-input"
                />
              </div>
            </div>
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
                {lastAddedBooks?.map((book) => {
                  return <BookCard bookData={book}></BookCard>;
                })}
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
                {bestBooks?.map((book) => {
                  return <BookCard bookData={book}></BookCard>;
                })}
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
