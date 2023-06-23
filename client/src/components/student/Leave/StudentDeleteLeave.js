import React, { useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const StudentDeleteLeave = () => {
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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error: " + response.status);
        }
        // Handle successful response
        console.log("Delete request successful");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Input placeholer="ID" value={id} onChange={handleIDChange} />
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default StudentDeleteLeave;
