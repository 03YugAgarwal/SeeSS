import React from "react";

const StudentCompainItem = (props) => {
  const {
    id,
    type,
    date,
    time,
    duration,
    isApproved,
    isRejected,
    studentId,
    wardenId,
  } = props.e;

  return (
    <ul>
      <li>ID: {id}</li>
      <li>Type: {type}</li>
      <li>Date: {date}</li>
      <li>Time: {time}</li>
      <li>Duration: {duration}</li>
      <li>isApproved: {isApproved}</li>
      <li>isRejected: {isRejected}</li>
      <li>studentId: {studentId}</li>
      <li>wardenId: {wardenId}</li>
    </ul>
  );
};

export default StudentCompainItem;
