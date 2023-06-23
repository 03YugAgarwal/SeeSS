import React from "react";

const StudentCompainItem = (props) => {
  const {
    id,
    complaintType,
    complaintDate,
    complaintDescription,
    complaintSeverity,
    isResolved,
    studentId,
    wardenId,
  } = props.e;

  return (
    <ul>
      <li>ID: {id}</li>
      <li>complaintType: {complaintType}</li>
      <li>complaintDate: {complaintDate}</li>
      <li>complaintDescription: {complaintDescription}</li>
      <li>complaintSeverity: {complaintSeverity}</li>
      <li>isResolved: {""+isResolved}</li>
      <li>studentId: {studentId}</li>
      <li>wardenId: {wardenId}</li>
    </ul>
  );
};

export default StudentCompainItem;
