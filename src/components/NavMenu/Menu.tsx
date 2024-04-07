import { Link } from 'react-router-dom'
import { Text } from '@consta/uikit/Text';
import "./Menu.scss"

const Menu = () => {
  return (
    <div className='menu-vertical'>
      <Text size='3xl'>BookFlow</Text>
      <Link to=".">Главная</Link>
      <br/>
      <Link to="mybooks">Мои книги</Link>
      <br/>
      <Link to="myprofile">Профиль</Link>
      <br/>
      <Link to="addbook">Добавть книгу</Link>
      <br/>
    </div>
  )
}

export default Menu