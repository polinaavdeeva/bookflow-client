import { Avatar } from "@consta/uikit/Avatar";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { FC, useState } from "react";
import StarIcon from "../../assets/starIcon";
import { Button } from "@consta/uikit/Button";
import DeleteCommentPopup from "../DeletePopup/DeleteCommentPopup";

interface IComment {
  addComplaint: () => void;
  com: {
    content: string,
    stars: number,
  }
  isAdmin: boolean
}

const Comment: FC<IComment> = ({ addComplaint, com, isAdmin}) => {
  const [isComplaintButtonShowed, setIsComplaintButtonShowed] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  return (
    <Layout direction="column" style={{ width: "100%", marginBottom: 20}}>
      <DeleteCommentPopup isOpen={isDeletePopupOpen} onClose={()=>setIsDeletePopupOpen(false)}></DeleteCommentPopup>
      <Layout direction="row" style={{ marginBottom: 10 }}>
        <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
        <Text style={{ paddingTop: 7, paddingLeft: 10 }}> Райан Гослинг</Text>
        <Text className="item-text" style={{ paddingLeft: 20 }}>
          <StarIcon></StarIcon> {com.stars}
        </Text>
        <Layout style={{ width: "9.8%" }}></Layout>
        {isComplaintButtonShowed ? 
          (!isAdmin ? 
          <Button
            label="Оставить жалобу на отзыв"
            size="xs"
            onMouseLeave={() => setIsComplaintButtonShowed(false)}
            style={{ marginLeft: -7, background: "#674188" }}
            form="round"
            onClick={addComplaint}
          /> 
          : 
          <Button
            label="Удалить"
            size="xs"
            onMouseLeave={() => setIsComplaintButtonShowed(false)}
            style={{ marginLeft: 105, background: "#674188" }}
            form="round"
            onClick={()=>setIsDeletePopupOpen(true)}
          />
          )
         : 
          <Button
            size="xs"
            label="⋮"
            view="clear"
            form="round"
            style={{ marginLeft: 144, fontSize: 25 }}
            onMouseEnter={() => setIsComplaintButtonShowed(true)}
          />
        }
      </Layout>
      {com.content}
    </Layout>
  );
};

export default Comment;
