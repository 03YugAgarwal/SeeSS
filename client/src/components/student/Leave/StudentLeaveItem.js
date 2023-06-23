import React from "react";

const StudentLeaveItem = (props) => {
  const {
    id,
    leaveType,
    leaveDate,
    leaveTime,
    leaveDuration,
    isApproved,
    isRejected,
    studentId,
    wardenId,
  } = props.e;
  // console.log(time);

  return (
    <ul>
      <li>ID: {id}</li>
      <li>Type: {leaveType}</li>
      <li>Date: {leaveDate}</li>
      <li>Time: {leaveTime}</li>
      <li>Duration: {leaveDuration}</li>
      <li>isApproved: {""+isApproved}</li>
      <li>isRejected: {""+isRejected}</li>
      <li>studentId: {studentId}</li>
      <li>wardenId: {wardenId}</li>
    </ul>
  );
};

export default StudentLeaveItem;
