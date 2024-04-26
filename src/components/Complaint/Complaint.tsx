import { FC, useState } from "react";
import "./Complaint.scss";
import { Button } from "@consta/uikit/Button";
import { User } from "@consta/uikit/User";
import defailtPhoto from "../../assets/аватарка_по-умолчанию.png";

const Complaint: FC = (): React.ReactElement => {
  return (
    <section className="complaint">
      <p className="complaint__title">Неправильно заполение карточки</p>
      <div className="complaint__container-info">
        <User avatarUrl={defailtPhoto} name="Ирина Кислова" />
        <p className="complaint__text">
          Но высококачественный прототип будущего проекта прекрасно подходит для
          реализации экспериментов, поражающих по своей масштабности и
          грандиозности. Есть над чем задуматься: сторонники тоталитаризма в
          науке формируют глобальную экономическую сеть и при этом — объективно
          рассмотрены соответствующими инстанциями. В рамках спецификации
          современных стандартов, многие известные личности ассоциативно
          распределены по отраслям. С другой стороны, курс на
          социально-ориентированный национальный проект, в своём классическом
          представлении, допускает внедрение стандартных подходов. Лишь
          реплицированные с зарубежных источников, современные исследования и по
          сей день остаются уделом либералов, которые жаждут быть функционально
          разнесены на независимые элементы. Разнообразный и богатый опыт
          говорит нам, что реализация намеченных плановых заданий прекрасно
          подходит для реализации поэтапного и последовательного развития
          общества. А также непосредственные участники технического прогресса
          неоднозначны и буд
        </p>
        <div className="complaint__button-container">
          <Button
            className="complaint__button"
            label="Перейти к источнику"
            form="round"
            size="s"
          />
          <Button
            className="complaint__button"
            label="Просмотрено"
            form="round"
            size="s"
          />
        </div>
      </div>
    </section>
  );
};

export default Complaint;
