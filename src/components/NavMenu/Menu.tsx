import { Link } from "react-router-dom";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import "./Menu.scss";
import React, { FC } from "react";
import LogoItem from "../../assets/logoItem";

interface IMenuProps {
  onClick: () => void;
}

const Menu: FC<IMenuProps> = ({ onClick }) => {
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
          size='s' 
          className='menu-button mybooks' 
          style={{width: "48vh", textAlign: "left"}}
          ></Button>
        </Link>
      <br/>
      <Link to="myprofile"><Button label="Профиль" view='clear' size='s' className='menu-button' style={{width: "48vh", textAlign: "left"}}/></Link>
      <br/>
        <Link to="addbook">
        <Button
          label="Добавить книгу"
          view="clear"
          size="s"
          style={{ width: "48vh", textAlign: "left" }}
          onClick={onClick}
        />
      </Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link to="/sign-in"><Button label="Выйти" view='clear' size='s' className='menu-button' style={{width: "48vh", textAlign: "left"}}/></Link>
    </div>
  );
};

export default Menu;
