import { Text } from '@consta/uikit/Text';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div style={{
        width: "97%", 
        height: 21, 
        background: "#FFFBF5", 
        padding: "30px 20px 30px 30px", 
        marginTop: 10, display: "flex", 
        justifyContent: "space-between",
        bottom: 0
      }}>
        <div style={{gap: 10, display: "flex", float: "inline-start"}}>
            <Link style={{textDecoration: 'none', color: 'black'}} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Text size='2xs'>Политика конфиденциальности</Text>
            </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Text size='2xs'>Правила пользования</Text>
            </Link>
            
                
        </div>
        <div style={{gap: 10, display: "flex", float: "inline-end"}}>
            <Text size='2xs'>© 2024 BookFlow, Made with ❤ by IQONIC Design.</Text>
        </div>
        
      </div>
    );
  };
  
  export default Footer;