import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const WardenRoomCreate = () => {
  const [details, setDetails] = useState("");

  const handleRoom = (e) => {
    setDetails((p) => {
      return { ...p, roomNo: e.target.value };
    });
  };
  const handleCapacity = (e) => {
    setDetails((p) => {
      return { ...p, roomCapacity: e.target.value };
    });
  };
  const handleType = (e) => {
    setDetails((p) => {
      return { ...p, roomType: e.target.value };
    });
  };

  const handleBtn = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/warden/room-details/create", {
      method: "POST",
      body: JSON.stringify({
        roomNo: details.roomNo,
        roomCapacity: details.roomCapacity,
        roomType: details.roomType,
      }),
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
      <Input
        onChange={handleRoom}
        value={details.roomNo}
        placeholder="RoomNo"
      />
      <Input
        onChange={handleCapacity}
        value={details.capacity}
        placeholder="Capacity"
      />
      <Input onChange={handleType} value={details.type} placeholder="Type" />
      <Button onClick={handleBtn}>Add Room</Button>
    </div>
  );
};

export default WardenRoomCreate;
