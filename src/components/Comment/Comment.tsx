import { Avatar } from "@consta/uikit/Avatar";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { FC, useContext, useEffect, useState } from "react";
import StarIcon from "../../assets/starIcon";
import { Button } from "@consta/uikit/Button";
import DeleteCommentPopup from "../DeletePopup/DeleteCommentPopup";
import { userApi } from "../../utils/UserApi";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import defaultAvatar from "../../assets/аватарка_по-умолчанию.png";

interface IComment {
  addComplaint: () => void;
  com: {
    _id: string;
    content: string;
    stars: number;
    author: string;
  };
  isAdmin: boolean;
}

const Comment: FC<IComment> = ({ addComplaint, com, isAdmin }) => {
  type UserInfo = {
    user: {
      name: string;
      lastName: string;
      _id: string;
    };
  };
  const [isComplaintButtonShowed, setIsComplaintButtonShowed] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | any>();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const getUserInfo = () => {
    userApi.getUserById(com.author).then((resp) => {
      setUserInfo(resp);
    });
  };

  const [avatarUrl, setAvatarUrl] = useState("")
  
  const getAvatar = async ()=>{
    await userApi.getUserAvatar(com.author).then(
      (resp)=>{
        const avUrl= URL.createObjectURL(resp);    
        if (resp.type !== 'application/json'){
          setAvatarUrl(avUrl)
        } else {
          setAvatarUrl("")
        }
      }
    )
  }

  useEffect(() => {
    getUserInfo();
    getAvatar();
  }, [com]);

  return (
    <Layout direction="column" style={{ width: "100%", marginBottom: 20 }}>
      <DeleteCommentPopup
        commentId={com._id}
        isOpen={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
      ></DeleteCommentPopup>
      <Layout direction="row" style={{ marginBottom: 10 }}>
        <Avatar url={avatarUrl && avatarUrl !== ""? avatarUrl: defaultAvatar}></Avatar>
        {currentUser?._id == com.author ? (
          <Link to="/myprofile">
            <Text style={{ paddingTop: 7, paddingLeft: 10 }}>
              {userInfo?.user.name + " " + userInfo?.user.lastName}
            </Text>
          </Link>
        ) : (
          <Link
            to={`/profile/${com.author}`}
            style={{ textDecoration: "none" }}
            state={userInfo}
          >
            <Text style={{ paddingTop: 7, paddingLeft: 10 }}>
              {userInfo?.user.name + " " + userInfo?.user.lastName}
            </Text>
          </Link>
        )}
        <Text className="item-text" style={{ paddingLeft: 20 }}>
          <StarIcon></StarIcon> {com.stars}
        </Text>
        <Layout style={{ width: "9.8%" }}></Layout>
        {isComplaintButtonShowed ? (
          !isAdmin ? (
            <Button
              label="Оставить жалобу на отзыв"
              size="xs"
              onMouseLeave={() => setIsComplaintButtonShowed(false)}
              style={{ marginLeft: -7, background: "#674188" }}
              form="round"
              onClick={addComplaint}
            />
          ) : (
            <Button
              label="Удалить"
              size="xs"
              onMouseLeave={() => setIsComplaintButtonShowed(false)}
              style={{ marginLeft: 105, background: "#674188" }}
              form="round"
              onClick={() => setIsDeletePopupOpen(true)}
            />
          )
        ) : (
          <Button
            size="xs"
            label="⋮"
            view="clear"
            form="round"
            style={{ marginLeft: 144, fontSize: 25 }}
            onMouseEnter={() => setIsComplaintButtonShowed(true)}
          />
        )}
      </Layout>
      {com.content}
    </Layout>
  );
};

export default Comment;
