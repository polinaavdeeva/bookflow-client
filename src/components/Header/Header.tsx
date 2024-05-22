import { Select } from "@consta/uikit/Select";
import { TextField } from "@consta/uikit/TextField";
import { User } from "@consta/uikit/User";
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./Header.scss";
import React from "react";

interface IHeader {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

const Header: FC<IHeader> = ({ isLoggedIn, isAdmin }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { currentUser } = React.useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //BookServices.bookSearch(searchQuery)
      navigate(`/result-books?query=${encodeURIComponent(searchQuery)}`);
    }
  };

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

  return (
    <div
      style={{
        height: 30,
        width: "85%",
        display: "flex",
        padding: "20px 0px 20px 24px",
        position: "fixed",
        background: "#F7EFE5",
        zIndex: 1,
      }}
    >
      <TextField
        className="Search"
        type="text"
        placeholder="Поиск"
        size="s"
        value={searchQuery || ""}
        onInput={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {isLoggedIn ? (
        <>
          {" "}
          <div style={{ display: "flex", paddingRight: 24 }}>
            {isAdmin ? (
              <User
                avatarUrl="https://yt3.ggpht.com/ytc/AKedOLRYP2P3RiZRosXSQqWfbo05TrV89uYqDVDsX9e0=s900-c-k-c0x00ffffff-no-rj"
                name="Администратор"
                info="Таксист"
                style={{ width: 200, height: 30 }}
              />
            ) : (
              <>
                <Select
                  placeholder="Выберите город"
                  view="clear"
                  size="xs"
                  items={items}
                  value={value}
                  onChange={setValue}
                  style={{
                    width: 140,
                    height: 30,
                    marginTop: 4,
                    paddingRight: 20,
                    zIndex: 2,
                  }}
                  className="myInput"
                />
                <Link to="/myprofile">
                  <User
                    avatarUrl="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"
                    name={`${currentUser?.name} ${currentUser?.lastName}`}
                    info="Пользователь"
                    style={{ width: 200, height: 30 }}
                  />
                </Link>
              </>
            )}
          </div>
        </>
      ) : (
        <Link to="/sign-in" className="header__link">
          <p className="header__sign-in">Войти</p>
        </Link>
      )}
    </div>
  );
};

export default Header;
