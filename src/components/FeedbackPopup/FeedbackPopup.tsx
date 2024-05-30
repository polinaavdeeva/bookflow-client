import React, { FC, useState } from "react";
import "./FeedbackPopup.scss";
import { Button } from "@consta/uikit/Button";
import { TextField } from "@consta/uikit/TextField";
import { commentApi } from "../../utils/CommentApi";

interface IFeedbackProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  addComment: (text: string, stars: number) => void;
  bookId: string | any;
}

const FeedbackPopup: FC<IFeedbackProps> = ({
  isOpen,
  setIsOpen,
  addComment,
  bookId
}): React.ReactElement => {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [stars, setStars] = useState<number>(0)

  const sendComment = async () =>{
    await commentApi.addComment(searchQuery, bookId).then(
      (resp)=>{console.log(resp)}
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const saveAndExit = () =>{
    //addComment(searchQuery, stars)
    sendComment()
    setIsOpen(false)
  }

  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__feedback-container">
        <button
          className="popup__close-button"
          type="button"
          onClick={()=>setIsOpen(false)}
        ></button>
        <h2 className="popup__title">Добавить отзыв</h2>
        <form className="popup__form-feedback ">
          <TextField
            className="popup__feedback-input"
            id="annotation"
            placeholder="Отзыв"
            value={searchQuery}
            onInput={handleInputChange}
            type="textarea"
            view="clear"
          ></TextField>
          <div className="popup__feedback-number">
            <Button className="popup__number" label="1" onClick={()=>setStars(1)} disabled={stars===1}></Button>
            <Button className="popup__number" label="2" onClick={()=>setStars(2)} disabled={stars===2}></Button>
            <Button className="popup__number" label="3" onClick={()=>setStars(3)} disabled={stars===3}></Button>
            <Button className="popup__number" label="4" onClick={()=>setStars(4)} disabled={stars===4}></Button>
            <Button className="popup__number" label="5" onClick={()=>setStars(5)} disabled={stars===5}></Button>
          </div>
          <Button
            className="popup__add-button"
            label="Сохранить"
            form="round"
            onClick={()=>saveAndExit()}
            disabled={(stars===0 || !searchQuery)}
          />
        </form>
      </div>
    </section>
  );
};

export default FeedbackPopup;
