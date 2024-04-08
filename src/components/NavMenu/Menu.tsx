import { Link } from 'react-router-dom'
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import "./Menu.scss"
import React from 'react';

const Menu = () => {
  return (
    <div className='menu-vertical'>
      <Text size='3xl'>BookFlow</Text>
      <br/>
      <Link to="."><Button label="Главная" view='clear' size='s' style={{width: "50vh", paddingRight: 170}}/></Link>
      
      <Link to="mybooks"><Button label="Мои книги" view='clear' size='s' style={{width: "50vh", paddingRight: 155}}/></Link>
      <br/>
      <Link to="myprofile"><Button label="Профиль" view='clear' size='s' style={{width: "50vh", paddingRight: 165}}/></Link>
      <br/>
      <Link to="addbook"><Button label="Добавить книгу" view='clear' size='s' style={{width: "50vh", paddingRight: 118}}/></Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link to="/sign-in"><Button label="Выйти" view='clear' size='s' style={{width: "50vh", paddingRight: 180}}/></Link>
    </div>
  )
}

export default Menu