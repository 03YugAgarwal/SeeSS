import React, { useState, useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const WardenComplaintReject = () => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleAccept = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8000/api/v1/warden/complaint/reject/${id}`, {
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
      <h6>Reject Complaint: </h6>
      <Input placeholder="id" value={id} onChange={handleChange} />
      <Button onClick={handleAccept}>Reject</Button>
    </div>
  );
};

export default WardenComplaintReject;
