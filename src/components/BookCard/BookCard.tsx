import { Link } from "react-router-dom";
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { FC, useEffect, useRef, useState } from 'react';
import './BookCard.scss'
import StarIcon from '../../assets/starIcon';
import BookServices from "../../utils/BookServices";

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

const BookCard: FC<IBookCard> = ({bookData = undefined}) => {
    //https://www.colorhexa.com/8a99a6.png
    
    const [imageSrc, setImageSrc] = useState<string | undefined>("")
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

    console.log(bookData)

    const fetchImage = async () => {
        try {
          // const imageBlob = await BookServices.getBookImage(bookData?.id);
          const imageUrl = bookData?.image
          
          // URL.createObjectURL(imageBlob);
          setImageSrc(imageUrl);
        } catch (error) {
          console.error('Error fetching the image:', error);
        }
      };

    
      useEffect(() => {
        fetchImage();
      }, [bookData?.id]);
   

    return (
      <Link to={`/book?id=${bookData?.id}`} state={bookData}>
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
        <img src={imageSrc}  style={{width: 160, height: 120, borderRadius: "20px 20px 0px 0px"}}></img>
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