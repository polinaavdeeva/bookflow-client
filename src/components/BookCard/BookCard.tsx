import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { useRef } from 'react';
import { Picture } from '@consta/uikit/Picture';
import './BookCard.scss'
import StarIcon from '../../assets/starIcon';

const BookCard = () => {
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
      <Card form="round" style={{width: 137, height: 198, background:"#FFFDFB", borderRadius: 20, marginRight: 17, display: "inline-block", marginBottom: 10}}>
        <img src="https://www.colorhexa.com/8a99a6.png" style={{width: 137, height: 107, borderRadius: "20px 20px 0px 0px"}}></img>
        <div style={{padding: "15px 12px 10px 12px"}}>
            <Text className="card-text">Название книги</Text>
            <Text className="card-text-secondary">Автор</Text>
            <div style={{paddingTop: 10, display:"flex"}}>
                <StarIcon></StarIcon>
                <Text className="card-number">4,3</Text>
            </div>
        </div>
        
        
      </Card>
    );
  };
  
  export default BookCard;