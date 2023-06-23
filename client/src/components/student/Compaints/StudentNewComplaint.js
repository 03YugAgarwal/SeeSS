import React, { useState } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const StudentNewComplaint = () => {
  const [leaveDetails, setLeaveDetails] = useState({
    leaveType: "",
    leaveDate: "",
    leaveTime: "",
    leaveDuration: "",
  });

  const handleType = (e) => {
    setLeaveDetails((prev)=> {
       return {...prev,leaveType: e.target.value}
    })
}

const handleDate = (e) => {
      setLeaveDetails((prev)=> {
         return {...prev,leaveDate: e.target.value}
      })
      
    }
    
    const handleTime = (e) => {
      setLeaveDetails((prev)=> {
         return {...prev,leaveTime: e.target.value}
      })
      
    }
    
    const handleDuration = (e) => {
      setLeaveDetails((prev)=> {
         return {...prev,leaveDuration: e.target.value}
      })

  }

  const handleNewLeave = () => {

    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/complaint", {
      method: "POST",
      body: JSON.stringify({
        complaintType: leaveDetails.leaveType,
        complaintDate: leaveDetails.leaveDate,
        complaintDescription: leaveDetails.leaveTime,
        complaintSeverity: leaveDetails.leaveDuration
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
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
        <h3>New Complaint</h3>
      <Input onChange={handleType} value={leaveDetails.leaveType} placeholder="Type"/>
      <Input onChange={handleDate} value={leaveDetails.leaveDate} placeholder="Date"/>
      <Input onChange={handleTime} value={leaveDetails.leaveTime} placeholder="Description"/>
      <Input onChange={handleDuration} value={leaveDetails.leaveDuration} placeholder="Severity"/>
      <Button onClick={handleNewLeave}>New Complaint</Button>
    </div>
  );
};

export default StudentNewComplaint;
