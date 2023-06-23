import React, { useState } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const StudentUpdateComplaint = () => {
  const [leaveDetails, setLeaveDetails] = useState({
    leaveID: "",
    leaveType: "",
    leaveDate: "",
    leaveTime: "",
    leaveDuration: "",
  });

  const handleleaveID = (e) => {
    setLeaveDetails((prev) => {
      return { ...prev, leaveID: e.target.value };
    });
  };
  const handleType = (e) => {
    setLeaveDetails((prev) => {
      return { ...prev, leaveType: e.target.value };
    });
  };

  const handleDate = (e) => {
    setLeaveDetails((prev) => {
      return { ...prev, leaveDate: e.target.value };
    });
  };

  const handleTime = (e) => {
    setLeaveDetails((prev) => {
      return { ...prev, leaveTime: e.target.value };
    });
  };

  const handleDuration = (e) => {
    setLeaveDetails((prev) => {
      return { ...prev, leaveDuration: e.target.value };
    });
  };

  const handleNewLeave = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/complaint", {
      method: "PUT",
      body: JSON.stringify({
        complaintId: +leaveDetails.leaveID,
        complaintType: leaveDetails.leaveType,
        complaintDate: leaveDetails.leaveDate,
        complaintDescription: leaveDetails.leaveTime,
        complaintSeverity: leaveDetails.leaveDuration,
      }),
      headers: {
        Authorization: "Bearer " + token
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
        <h3>Update Leave</h3>
      <Input
        onChange={handleleaveID}
        value={leaveDetails.leaveID}
        placeholder="ID"
      />
      <Input
        onChange={handleType}
        value={leaveDetails.leaveType}
        placeholder="ComplaintType"
      />
      <Input
        onChange={handleDate}
        value={leaveDetails.leaveDate}
        placeholder="ComplaintDate"
      />
      <Input
        onChange={handleTime}
        value={leaveDetails.leaveTime}
        placeholder="ComplaintDescription"
      />
      <Input
        onChange={handleDuration}
        value={leaveDetails.leaveDuration}
        placeholder="ComplaintSeverity"
      />
      <Button onClick={handleNewLeave}>Update Complaint</Button>
    </div>
  );
};

export default StudentUpdateComplaint;
