import { Text } from '@consta/uikit/Text';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div style={{
        height: 20, 
        background: "#FFFBF5", 
        padding: "30px 20px 30px 30px", 
        marginTop: 10, display: "flex", 
        justifyContent: "space-between",
        bottom: 0
      }}>
        <div style={{gap: 10, display: "flex", float: "inline-start"}}>           
                <Text size='2xs'>Политика конфиденциальности</Text>
            
                <Text size='2xs'>Правила пользования</Text>                        
        </div>
        <div style={{gap: 10, display: "flex", float: "inline-end"}}>
            <Text size='2xs'>© 2024 BookFlow.</Text>
        </div>
        
      </div>
    );
  };
  
  export default Footer;