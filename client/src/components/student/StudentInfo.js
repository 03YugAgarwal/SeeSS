import React, { useEffect, useState } from "react";
import Button from "../UI/Button";

const StudentInfo = () => {
  const [details, setDetails] = useState("");

  let token = ""

  const handleMyInfo = () => {

    token = localStorage.getItem("token");

    fetch("http://localhost:8000/api/v1/student/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDetails(data);
        })
        .catch((error) => console.error(error));
  }

  return <div>
    <h1>My Info</h1>
    <h4>General Info</h4>
    <p>Name: {details.data.name}</p>
    <p>RegNo: {details.data.regNo}</p>
    <p>Block: {details.data.block}</p>
    <p>RoomNo: {details.data.roomNo}</p>
    <p>Mess: {details.data.messType}</p>

    <Button onClick={handleMyInfo}>My Info</Button>

    <Button>Warden Info</Button>

  </div>;
};

export default StudentInfo;
