import React, { useEffect, useState } from "react";
import StudentLeaveItem from "./StudentLeaveItem";
import Button from "../../UI/Button";
import StudentNewLeave from "./StudentNewLeave";

const StudentLeave = () => {
  const [leave, setLeave] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLeave, setIsLeave] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/leave", {
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
        console.log(data);
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
      {!loading && isLeave ? (
        <ul>
          {leave.data.map((e) => {
            return <StudentLeaveItem e={e} />;
          })}
        </ul>
      ) : (
        <p>No Leave Found</p>
      )}
      
        <StudentNewLeave />


    </div>
  );
};

export default StudentLeave;
