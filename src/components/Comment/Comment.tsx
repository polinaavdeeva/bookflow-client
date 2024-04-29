import { Avatar } from "@consta/uikit/Avatar";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { FC, useState } from "react";
import StarIcon from "../../assets/starIcon";
import { Button } from "@consta/uikit/Button";

interface IComment {
  addComplaint: () => void;
  com: {
    text: string,
    stars: number
  }
}

const Comment: FC<IComment> = ({ addComplaint, com}) => {
  const [isComplaintButtonShowed, setIsComplaintButtonShowed] = useState(false);
  return (
    <Layout direction="column" style={{ width: "100%", marginBottom: 20}}>
      <Layout direction="row" style={{ marginBottom: 10 }}>
        <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar>
        <Text style={{ paddingTop: 7, paddingLeft: 10 }}> Райан Гослинг</Text>
        <Text className="item-text" style={{ paddingLeft: 20 }}>
          <StarIcon></StarIcon> {com.stars}
        </Text>
        <Layout style={{ width: "9.8%" }}></Layout>
        {isComplaintButtonShowed ? (
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
            size="xs"
            label="⋮"
            view="clear"
            style={{ marginLeft: 145 }}
            onMouseEnter={() => setIsComplaintButtonShowed(true)}
          />
        )}
      </Layout>
      {com.text}
    </Layout>
  );
};

export default Comment;
