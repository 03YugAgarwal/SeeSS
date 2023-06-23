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
    fetch("http://localhost:8000/api/v1/student/leave", {
      method: "PUT",
      body: JSON.stringify({
        leaveID: +leaveDetails.leaveID,
        leaveType: leaveDetails.leaveType,
        leaveDate: leaveDetails.leaveDate,
        leaveTime: leaveDetails.leaveTime,
        leaveDuration: leaveDetails.leaveDuration,
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
        placeholder="Type"
      />
      <Input
        onChange={handleDate}
        value={leaveDetails.leaveDate}
        placeholder="Date"
      />
      <Input
        onChange={handleTime}
        value={leaveDetails.leaveTime}
        placeholder="Time"
      />
      <Input
        onChange={handleDuration}
        value={leaveDetails.leaveDuration}
        placeholder="Duration"
      />
      <Button onClick={handleNewLeave}>Update Leave</Button>
    </div>
  );
};

export default StudentUpdateComplaint;
