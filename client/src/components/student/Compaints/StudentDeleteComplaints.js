import React, { useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const StudentDeleteComplaint = () => {
  const [id, setID] = useState("");

  const handleIDChange = (e) => {
    setID(e.target.value);
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/leave", {
      method: "DELETE",
      body: JSON.stringify({
        leaveID: id
      }),
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
  };

  return (
    <div>
      <Input placeholer="ID" value={id} onChange={handleIDChange} />
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default StudentDeleteComplaint;
