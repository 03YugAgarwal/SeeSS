import React, { useEffect, useState } from "react";

const StudentInfo = () => {
  const [details, setDetails] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

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
  }, []);

  return <></>;
};

export default StudentInfo;
