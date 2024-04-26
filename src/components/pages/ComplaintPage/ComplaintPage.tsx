import { FC, useState } from "react";
import "./ComplaintPage.scss";
import Complaint from "../../Complaint/Complaint";

const ComplaintPage: FC = (): React.ReactElement => {
  const [componentCount, setComponentCount] = useState(1);

  const addComponent = () => {
    setComponentCount(componentCount + 1);
  };

  const removeComponent = () => {
    setComponentCount(componentCount - 1);
  };

  return (
    <section className="complaint-page">
      {componentCount > 0 ? (
        <>
          <h2 className="complaint-page__title">Новые сообщения с жалобами</h2>
          <Complaint></Complaint>
          <Complaint></Complaint>
        </>
      ) : (
        <h2 className="complaint-page__title">
          Новых сообщений с жалобами нет
        </h2>
      )}
    </section>
  );
};

export default ComplaintPage;
