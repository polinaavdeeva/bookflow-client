import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import { useRef} from "react";

import "./MainPage.scss";
import AdCard from "../../AdCard/AdCard";
import BookCard from "../../BookCard/BookCard";

const MainPage = () => {
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
