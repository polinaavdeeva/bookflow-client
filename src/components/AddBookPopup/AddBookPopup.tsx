import React, { FC, useState } from "react";
import "./AddBookPopup.scss";
import { Button } from "@consta/uikit/Button";
import defaultPhoto from "../../assets/defult-book-add-photo.png";
import { File } from "@consta/uikit/File";
import { FileField, FileFieldProps } from '@consta/uikit/FileField';
import ExitIcon from "../../assets/ExitIcon";
import { Attachment } from '@consta/uikit/Attachment';

interface IAddBookProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddBookPopup: FC<IAddBookProps> = ({
  isOpen,
  onClose,
}): React.ReactElement => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  
  const currentDate = new Date();
  const postingDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('author', author);
    formData.append('rating', rating.toString());
    formData.append('postingDate', postingDate);
    if (image) {
      formData.append('image', image);
    }
    const token = localStorage.getItem("token");
    console.log(image)

    try {
      const response = await fetch('http://localhost:4000/books', {
        
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
        body: JSON.stringify({
          name: name,
          description: description,
          author: author,
          rating: 0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1ektojNlZz78K8up9AK3veOAxkOYspJgQSgODIDLog&s",
          postingDate: postingDate.toString()
      }),
      });
      console.log('Book uploaded:', response);
      setName("")
      setAuthor("")
      setDescription("")
      setImage(null)
      setPreview("")
      onClose()
    } catch (error) {
      console.error('Error uploading book:', error);
    }
  };
  
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Добавление новой книги</h2>
        <form className="popup__form">
          <div className="popup__book-info">

            <div>
              {/* <FileField id={""}>
                <File extension="jpg" className="popup__book-img" />
              </FileField> */}
              {/* <input type="file" onChange={handleFileChange} className="popup__book-img" style={{height: 300}}/> */}

              <label htmlFor="file-upload" className="custom-file-upload">
                Загрузить файл
              </label>
              <input id="file-upload" type="file" onChange={handleFileChange} />
              {preview && <img src={preview} alt="Preview" className="preview-image" />}
              <style>{`
                  .custom-file-upload {
                    display: inline-block;
                    padding: 6px 12px;
                    cursor: pointer;
                    background-color: brown;
                    color: white;
                    border-radius: 4px;
                    text-align: center;
                  }
                  #file-upload {
                    display: none;
                  }
                  .preview-image {
                    margin-top: 10px;
                    max-width: 100%;
                    height: auto;
                  }
              `}</style>
                
              
              {/* <FileField id={"12"} onChange={handleFileChange}>
                {(props) => <Button {...props} label="Выбрать файлы" view="clear" style={{height: "20vh"}} />}
              </FileField> */}
            
            </div>
              

            <div className="popup__inputs-container">
              <div className="popup__input-row">
                <label className="popup__input-label" htmlFor="book-name">
                  Название книги
                </label>
                <input
                  className="popup__input"
                  id="book-name"
                  type="text"
                  placeholder="Название книги"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="popup__input-row">
                <label className="popup__input-label" htmlFor="author-name">
                  Автор
                </label>
                <input
                  className="popup__input"
                  id="author-name"
                  type="text"
                  placeholder="Имя автора"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
              </div>
            </div>
            <div className="popup__annotation-container">
              <label className="popup__input-label" htmlFor="annotation">
                Аннотация
              </label>
              <textarea
                className="popup__annotation-input"
                id="annotation"
                placeholder="Аннотация"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
          </div>

          <Button
            className="popup__add-button"
            label="Резместить"
            form="round"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </section>
  );
};

export default AddBookPopup;
