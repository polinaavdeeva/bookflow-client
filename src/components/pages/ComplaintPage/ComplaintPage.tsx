import { FC, useEffect, useState } from "react";
import "./ComplaintPage.scss";
import { complaintApi } from "../../../utils/ComplaintApi";
import Complaint from "../../Complaint/Complaint";

interface ComplaintData {
  _id: string;
  userId: string;
  reason: string;
  text: string;
  userName: string;
  bookId: string;
}

const ComplaintPage: FC = (): React.ReactElement => {
  const [complaints, setComplaints] = useState<ComplaintData[]>([]);

  useEffect(() => {
    complaintApi
      .getAllComplaints()
      .then((data) => {
        setComplaints(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id: string) => {
    setComplaints((prevComplaints) =>
      prevComplaints.filter((complaint) => complaint._id !== id)
    );
  };

  return (
    <section className="complaint-page">
      {complaints.length > 0 ? (
        <>
          <h2 className="complaint-page__title">Новые сообщения с жалобами</h2>
          {complaints.map((complaint) => (
            <Complaint
              key={complaint._id}
              id={complaint._id}
              reason={complaint.reason}
              text={complaint.text}
              userId={complaint.userId}
              onDelete={handleDelete}
              bookId={complaint.bookId}
            />
          ))}
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
