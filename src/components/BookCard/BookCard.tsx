import { Link } from "react-router-dom";
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { FC, useRef } from 'react';
import './BookCard.scss'
import StarIcon from '../../assets/starIcon';

type Book ={
  name: string
  description: string
  image: string
  author: string
  rating: number
  id: string
  postingDate: string
}

interface IBookCard {
  bookData: Book|null
}

const BookCard: FC<IBookCard> = ({bookData = null}) => {
    //https://www.colorhexa.com/8a99a6.png
    
    const componentRef = useRef<HTMLImageElement>(null);
    
    const getImageSettings = (key: string) => {
        if (key === 'dark') {
          return {
            size: 0,
          };
        }
        return {
          size: 700,
        };
      };

    return (
      <Link to="/book">
      <Card form="round" 
      style={{
          width: 160, 
          height: 230, 
          background:"#FFFDFB", 
          borderRadius: 20, 
          marginRight: 18, 
          marginLeft: 18,
          marginTop: 10, 
          display: "inline-block", 
          marginBottom: 10,
        }}>
        <img src="https://www.colorhexa.com/8a99a6.png" style={{width: 160, height: 120, borderRadius: "20px 20px 0px 0px"}}></img>
        <div style={{padding: "15px 12px 10px 12px"}}>
            <Text className="card-text">{bookData?.name}</Text>
            <Text className="card-text-secondary">{bookData?.author}</Text>
            <div style={{paddingTop: 10, display:"flex"}}>
                <StarIcon></StarIcon>
                <Text className="card-number">{bookData?.rating}</Text>
            </div>
        </div>
        
        
      </Card>
      </Link>
    );
  };
  
  export default BookCard;