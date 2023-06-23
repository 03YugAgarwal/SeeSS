import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import styles from './StudentRegister.module.css'

const StudentRegister = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    regno: "",
    block: "",
    password: "",
    roomno: "",
  });

  function handleOnName(e) {
    setUserDetails((prev) => {
      return { ...prev, name: e.target.value };
    });
    // console.log(userDetails);
  }

  function handleOnReg(e) {
    setUserDetails((prev) => {
      return { ...prev, regno: e.target.value };
    });
    // console.log(userDetails);
  }
  function handleOnBlock(e) {
    setUserDetails((prev) => {
      return { ...prev, block: e.target.value };
    });
    // console.log(userDetails);
  }

  function handleOnPassword(e) {
    setUserDetails((prev) => {
      return { ...prev, password: e.target.value };
    });
    // console.log(userDetails);
  }
  function handleOnRoomNo(e) {
    setUserDetails((prev) => {
      return { ...prev, roomno: e.target.value };
    });
    // console.log(userDetails);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!userDetails.name || !userDetails.regno || !userDetails.roomno || !userDetails.password || !userDetails.block){
      alert("Fill all things")
      return
    }

    if(userDetails.regno.length < 9 || userDetails.regno.length > 9 ){
      alert('Reg No should be of length equal to 9')
      return;
    }
    if(userDetails.password.length < 8){
      alert('Password should be of length greater than or equal to 8')
      return;
    }
    if(userDetails.name.length < 3){
      alert('Name should be of length greater than or equal to 3')
      return;
    }
    if(userDetails.block !== 'A' || userDetails.block !== 'B' || userDetails.block !== 'C' || userDetails.block !== 'D'){
      alert('Blocks must be A or B or C or D')
      return;
    }


    console.log(userDetails);
    fetch("http://localhost:8000/api/v1/student/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: userDetails.name,
        regNo: userDetails.regno,
        block: userDetails.block,
        password: userDetails.password,
        roomNo: userDetails.roomno,
      }),
      headers: {
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
    <div className={styles.div}>
      <form action="">
        <h2>Student Register</h2>
        <div className={styles.inputContainer}>
          <ul>
            
          <li><Input
            type="text"
            onChange={handleOnName}
            value={userDetails.name}
            placeholder="Name"
          /></li>
          <li><Input
            type="text"
            onChange={handleOnReg}
            value={userDetails.regno}
            placeholder="RegNo"
          /></li>
          <li><Input
            type="text"
            onChange={handleOnBlock}
            value={userDetails.block}
            placeholder="Block"
          /></li>
          <li><Input
            type="text"
            onChange={handleOnPassword}
            value={userDetails.password}
            placeholder="Password"
          /></li>
          <li><Input
            type="text"
            onChange={handleOnRoomNo}
            value={userDetails.roomno}
            placeholder="RoomNo"
          /></li>
          </ul>
        </div>
        <Button onClick={handleSubmit}>Register</Button>
      </form>
    </div>
  );
};

export default StudentRegister;
