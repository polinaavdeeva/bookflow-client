import { Link } from "react-router-dom";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import "./Menu.scss";
import LogoItem from "../../assets/logoItem";
import MybooksIcon from "../../assets/MybooksIcon";
import { FC, useState } from "react";
import ProfileIcon from "../../assets/ProfileIcon";
import AddbookIcon from "../../assets/AddbookIcon copy";
import ExitIcon from "../../assets/ExitIcon";
import ComplaintIcon from "../../assets/Complaint";
import StatisticIcon from "../../assets/StatisticIcon";
import { useNavigate } from "react-router-dom";

interface IMenuProps {
  onClick: () => void;
  loggedOut: () => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  setAdmin: () => void;
}

const Menu: FC<IMenuProps> = ({
  onClick,
  loggedOut,
  isLoggedIn,
  isAdmin,
  setAdmin,
}) => {
  const [isMybooksIconDark, setIsMybooksIconDark] = useState<boolean>(true);
  const [isProfileIconDark, setIsProfileIconDark] = useState<boolean>(true);
  const [isAddBookIconDark, setIsAddBookIconDark] = useState<boolean>(true);
  const [isExitIconDark, setIsExitIconDark] = useState<boolean>(true);
  const [isComplaintIconDark, setIsComplaintIconDark] = useState<boolean>(true);
  const [isStatisticIconDark, setIsStatisticIconDark] = useState<boolean>(true);
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    loggedOut();
    setAdmin();
    navigate("/", { replace: true });
  }

  return (
    <div className="menu-vertical">
      <Link to="." style={{ textDecoration: "none", color: "black" }}>
        <div style={{ display: "flex", padding: 20, width: "100%" }}>
          <div style={{ paddingTop: 2, paddingRight: 8 }}>
            <LogoItem />
          </div>
          <Text size="xl" className="text-on-top">
            BookFlow
          </Text>
        </div>
      </Link>
      {isAdmin ? (
        <>
          <Link to="complaints">
            <Button
              label="Раздел жалоб"
              view="clear"
              size="m"
              className="menu-button mybooks"
              style={{
                width: "100%",
                textAlign: "left",
                backgroundColor: isComplaintIconDark ? "" : "#674188",
                color: isComplaintIconDark ? "" : "#FFFBF5",
                paddingRight: 60,
                paddingLeft: 30,
              }}
              iconLeft={() => {
                return (
                  <ComplaintIcon dark={isComplaintIconDark}></ComplaintIcon>
                );
              }}
              onMouseEnter={() => setIsComplaintIconDark(false)}
              onMouseLeave={() => setIsComplaintIconDark(true)}
            ></Button>
          </Link>
          <br />
          <Link to="statistic">
            <Button
              label="Статистика"
              view="clear"
              size="m"
              className="menu-button mybooks"
              style={{
                width: "100%",
                textAlign: "left",
                backgroundColor: isStatisticIconDark ? "" : "#674188",
                color: isStatisticIconDark ? "" : "#FFFBF5",
                paddingRight: 80,
                paddingLeft: 30,
              }}
              iconLeft={() => {
                return (
                  <StatisticIcon dark={isStatisticIconDark}></StatisticIcon>
                );
              }}
              onMouseEnter={() => setIsStatisticIconDark(false)}
              onMouseLeave={() => setIsStatisticIconDark(true)}
            ></Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="mybooks">
            <Button
              label="Мои книги"
              view="clear"
              size="m"
              className="menu-button mybooks"
              style={{
                width: "100%",
                textAlign: "left",
                backgroundColor: isMybooksIconDark ? "" : "#674188",
                color: isMybooksIconDark ? "" : "#FFFBF5",
                paddingRight: 80,
                paddingLeft: 30,
              }}
              iconLeft={() => {
                return <MybooksIcon dark={isMybooksIconDark}></MybooksIcon>;
              }}
              onMouseEnter={() => setIsMybooksIconDark(false)}
              onMouseLeave={() => setIsMybooksIconDark(true)}
              disabled={!isLoggedIn}
            ></Button>
          </Link>
          <br />
          <Link to="myprofile">
            <Button
              label="Мои профиль"
              view="clear"
              size="m"
              className="menu-button"
              style={{
                width: "100%",
                textAlign: "left",
                backgroundColor: isProfileIconDark ? "" : "#674188",
                color: isProfileIconDark ? "" : "#FFFBF5",
                paddingRight: 60,
                paddingLeft: 28,
              }}
              iconLeft={() => {
                return <ProfileIcon dark={isProfileIconDark}></ProfileIcon>;
              }}
              onMouseEnter={() => setIsProfileIconDark(false)}
              onMouseLeave={() => setIsProfileIconDark(true)}
              disabled={!isLoggedIn}
            ></Button>
          </Link>
          <br />
          <Button
            label="Добавить книгу"
            view="clear"
            size="m"
            className="menu-button"
            style={{
              width: "100%",
              textAlign: "left",
              backgroundColor: isAddBookIconDark ? "" : "#674188",
              color: isAddBookIconDark ? "" : "#FFFBF5",
              paddingRight: 40,
              paddingLeft: 30,
            }}
            iconLeft={() => {
              return <AddbookIcon dark={isAddBookIconDark}></AddbookIcon>;
            }}
            onMouseEnter={() => setIsAddBookIconDark(false)}
            onMouseLeave={() => setIsAddBookIconDark(true)}
            onClick={onClick}
            disabled={!isLoggedIn}
          ></Button>
        </>
      )}

      <br />
      <br />
      <Link to="/sign-in">
        <Button
          label="Выйти"
          view="clear"
          size="m"
          className="menu-button"
          style={{
            width: "100%",
            textAlign: "left",
            backgroundColor: isExitIconDark ? "" : "#674188",
            color: isExitIconDark ? "" : "#FFFBF5",
            paddingRight: 115,
            paddingLeft: 31,
          }}
          iconLeft={() => {
            return <ExitIcon dark={isExitIconDark}></ExitIcon>;
          }}
          onMouseEnter={() => setIsExitIconDark(false)}
          onMouseLeave={() => setIsExitIconDark(true)}
          onClick={logOut}
        ></Button>
      </Link>
    </div>
  );
};

export default Menu;
