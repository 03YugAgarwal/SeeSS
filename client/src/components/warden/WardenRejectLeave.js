import React, { useState, useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const WardenRejectLeave = () => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleAccept = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8000/api/v1/warden/leave/reject/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h6>Reject Leave: </h6>
      <Input placeholder="id" value={id} onChange={handleChange} />
      <Button onClick={handleAccept}>Reject</Button>
    </div>
  );
};

export default WardenRejectLeave;
