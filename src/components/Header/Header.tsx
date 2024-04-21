import { Select } from "@consta/uikit/Select";
import { TextField } from "@consta/uikit/TextField";
import { User } from "@consta/uikit/User";
import { useState } from "react";
import "./Header.scss"

const Header = () => {

    type Item = {
        label: string;
        id: number;
      };

    const items: Item[] = [
        {
          label: "Воронеж",
          id: 1,
        },
        {
          label: "Москва",
          id: 2,
        },
        {
          label: "Нью Йорк",
          id: 3,
        },
      ];
    
      const [value, setValue] = useState<Item | null>();

    return(
    <div style={{height: 30, 
        width: "85%",
        display: "flex", 
        padding: "20px 0px 20px 24px",
        position: 'fixed',
        background: "#F7EFE5",
        zIndex: 0}}>
        <TextField
            className="Search"
            type="text"
            placeholder="Поиск"
            size="s"
        />

        <div style={{display: "flex", paddingRight: 24}}> 
            <Select
                placeholder="Выберите город"
                view="clear"
                size="xs"
                items={items}
                value={value}
                onChange={setValue}
                style={{ width: 140, height: 30, marginTop: 4, paddingRight: 20}} 
                className="myInput"
            />
            <User
                avatarUrl="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"
                name="Райан Гослинг"
                info="Водитель"
                style={{width: 200, height: 30}}
            /> 
        </div>
    </div>
    )
}

export default Header;
