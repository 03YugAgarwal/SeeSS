import React, { useEffect, useState } from "react";
import StudentCompainItem from "./StudentCompainItem";
import Button from "../../UI/Button";
import StudentNewComplaint from "./StudentNewComplaint";
import StudentUpdateComplaint from "./StudentUpdateComplaint";
import StudentDeleteComplaints from "./StudentDeleteComplaints";

const StudentComplaints = () => {
  const [leave, setLeave] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLeave, setIsLeave] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/complaint", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setLeave(data);
        // console.log(data);
        setIsLeave(true);
        if (leave == null) {
          setIsLeave(false);
          // console.log("Wrong");
        }
      })
      .catch((error) => console.error(error));
  }, []);



  return (
    <div>
      <h3>Complaints:</h3>
      {!loading && isLeave ? (
        <ul>
          {leave.data.map((e) => {
            return <StudentCompainItem key={e.id} e={e} />;
          })}
        </ul>
      ) : (
        <p>No Complaints Found</p>
      )}
      
        <StudentNewComplaint />
        <StudentUpdateComplaint />
        <StudentDeleteComplaints />


    </div>
  );
};

export default StudentComplaints;
