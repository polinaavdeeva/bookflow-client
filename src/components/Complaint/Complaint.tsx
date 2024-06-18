import { FC, useEffect, useState } from "react";
import "./Complaint.scss";
import { Button } from "@consta/uikit/Button";
import { User } from "@consta/uikit/User";
import defailtPhoto from "../../assets/аватарка_по-умолчанию.png";
import { complaintApi } from "../../utils/ComplaintApi";
import { useNavigate } from "react-router-dom";

interface IComplaintProps {
  id: string;
  reason: string;
  text: string;
  userId: string;
  onDelete: (id: string) => void;
  bookId: string;
  pageComplaint: string;
}

const Complaint: FC<IComplaintProps> = ({
  id,
  reason,
  text,
  userId,
  onDelete,
  bookId,
  pageComplaint,
}): React.ReactElement => {
  const [userName, setUserName] = useState<string>("");
  const [userLastName, setUserLastName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    complaintApi
      .getUserById(userId)
      .then((res) => {
        const user = res.user;
        setUserName(user.name);
        setUserLastName(user.lastName);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = () => {
    complaintApi
      .deleteComplaint(id)
      .then(() => {
        onDelete(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoToSource = () => {
    if (pageComplaint && pageComplaint.trim() !== "") {
      navigate(`/profile/${pageComplaint}`);
    } else {
      navigate(`/book?id=${bookId}`);
    }
  };

  return (
    <section className="complaint">
      <p className="complaint__title">{reason}</p>
      <div className="complaint__container-info">
        <User avatarUrl={defailtPhoto} name={`${userName} ${userLastName}`} />
        <p className="complaint__text">{text}</p>
        <div className="complaint__button-container">
          <Button
            className="complaint__button"
            label="Перейти к источнику"
            form="round"
            size="s"
            onClick={handleGoToSource}
          />
          <Button
            className="complaint__button"
            label="Просмотрено"
            form="round"
            size="s"
            onClick={handleDelete}
          />
        </div>
      </div>
    </section>
  );
};

export default Complaint;
