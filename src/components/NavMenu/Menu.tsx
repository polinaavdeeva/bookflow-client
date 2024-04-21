import { Link } from 'react-router-dom'
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import "./Menu.scss"
import LogoItem from '../../assets/logoItem';
import MybooksIcon from '../../assets/MybooksIcon';
import { useState } from 'react';
import ProfileIcon from '../../assets/ProfileIcon';
import AddbookIcon from '../../assets/AddbookIcon copy';
import ExitIcon from '../../assets/ExitIcon';

interface IMenuProps {
  onClick: () => void;
}

const Menu: FC<IMenuProps> = ({ onClick }) => {
  const [isMybooksIconDark, setIsMybooksIconDark] = useState<boolean>(true)
  const [isProfileIconDark, setIsProfileIconDark] = useState<boolean>(true)
  const [isAddBookIconDark, setIsAddBookIconDark] = useState<boolean>(true)
  const [isExitIconDark, setIsExitIconDark] = useState<boolean>(true)

  return (
    <div className='menu-vertical'>
      
      <Link to="." style={{textDecoration: "none", color: 'black'}}>
        <div style={{display: "flex", padding: 20, width: "100%"}}>
          <div style={{paddingTop: 2, paddingRight: 8}}><LogoItem/></div>
          <Text size='xl' className="text-on-top" >BookFlow</Text>
        </div>
      </Link>

      <Link to="mybooks">       
        <Button 
          label="Мои книги" 
          view='clear' 
          size='m' 
          className='menu-button mybooks' 
          style={{width: "100%",
            textAlign: "left", 
            backgroundColor: isMybooksIconDark? "":"#674188", 
            color: isMybooksIconDark? "":"#FFFBF5",
            paddingRight: 80,
            paddingLeft: 30,
          }}
          iconLeft={()=>{return(<MybooksIcon dark={isMybooksIconDark}></MybooksIcon>)}}        
          onMouseEnter={()=>setIsMybooksIconDark(false)}
          onMouseLeave={()=>setIsMybooksIconDark(true)}    
        ></Button>
      </Link>
      <br/>
      <Link to="myprofile">      
         <Button 
          label="Мои профиль" 
          view='clear' 
          size='m' 
          className='menu-button' 
          style={{width: "100%",
            textAlign: "left", 
            backgroundColor: isProfileIconDark? "":"#674188", 
            color: isProfileIconDark? "":"#FFFBF5",
            paddingRight: 60,
            paddingLeft: 28,
          }}
          iconLeft={()=>{return(<ProfileIcon dark={isProfileIconDark}></ProfileIcon>)}}        
          onMouseEnter={()=>setIsProfileIconDark(false)}
          onMouseLeave={()=>setIsProfileIconDark(true)}    
          ></Button>  
      </Link>
      <br/>
          
        <Button 
          label="Добавить книгу" 
          view='clear' 
          size='m' 
          className='menu-button' 
          style={{width: "100%",
            textAlign: "left", 
            backgroundColor: isAddBookIconDark? "":"#674188", 
            color: isAddBookIconDark? "":"#FFFBF5",
            paddingRight: 40,
            paddingLeft: 30,
          }}
          iconLeft={()=>{return(<AddbookIcon dark={isAddBookIconDark}></AddbookIcon>)}}        
          onMouseEnter={()=>setIsAddBookIconDark(false)}
          onMouseLeave={()=>setIsAddBookIconDark(true)}
          onClick={onClick}
          ></Button> 
      <br/>
      <br/>
      <br/>
      <br/>
      <Link to="/sign-in">
        <Button 
          label="Выйти" 
          view='clear' 
          size='m' 
          className='menu-button' 
          style={{width: "100%",
            textAlign: "left", 
            backgroundColor: isExitIconDark? "":"#674188", 
            color: isExitIconDark? "":"#FFFBF5",
            paddingRight: 115,
            paddingLeft: 31,
          }}
          iconLeft={()=>{return(<ExitIcon dark={isExitIconDark}></ExitIcon>)}}        
          onMouseEnter={()=>setIsExitIconDark(false)}
          onMouseLeave={()=>setIsExitIconDark(true)}    
          ></Button>
          </Link>
    </div>
  );
};

export default Menu;
