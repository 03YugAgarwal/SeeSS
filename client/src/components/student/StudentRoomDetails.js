import React, { useEffect, useState } from "react";

const StudentRoomDetails = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/room-details", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setDetails(data);
        if (data.message === "Student not assigned a room") {
          setLoading(true);
        }
      })
      .then((error) => {
        console.error(error);
      });

    return () => {};
  }, []);

  return (
    <div>
      {!loading && (
        <>
          <li>ID: {details.data.id}</li>
          <li>RoomNo: {details.data.roomNo}</li>
          <li>Capacity: {details.data.roomCapacity}</li>
          <li>block: {details.data.block}</li>
          <li>isFull: {details.data.isFull}</li>
        </>
      )}
      {loading ? <p>No Room Assigned</p> : <></>}
    </div>
  );
};

export default StudentRoomDetails;
