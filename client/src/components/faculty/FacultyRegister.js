import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import styles from "./FacultyRegister.module.css"

const FacultyRegister = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    empId: "",
    password: "",
    isHOD: false,
  });

  function handleOnName(e) {
    setUserDetails((prev) => {
      return { ...prev, name: e.target.value };
    });
    // console.log(userDetails);
  }

  function handleOnReg(e) {
    setUserDetails((prev) => {
      return { ...prev, empId: e.target.value };
    });
    // console.log(userDetails);
  }


  function handleOnPassword(e) {
    setUserDetails((prev) => {
      return { ...prev, password: e.target.value };
    });
    // console.log(userDetails);
  }
  function handleHOD(e) {
    setUserDetails((prev) => {
      return { ...prev, isHOD: userDetails.isHOD };
    });
    // console.log(userDetails);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!userDetails.name || !userDetails.empId || !userDetails.password ){
      alert("Fill all things")
      return
    }

    if(userDetails.empId.length < 5 || userDetails.empId.length > 5 ){
      alert('EmpID should be of length equal to 5')
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


    console.log(userDetails);
    fetch("http://localhost:8000/api/v1/faculty/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: userDetails.name,
        empId: userDetails.empId,
        password: userDetails.password,
        isHOD: userDetails.isHOD,
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
        <h2>Faculty Register</h2>
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
            value={userDetails.empId}
            placeholder="EmpID"
          /></li>
          <li><Input
            type="text"
            onChange={handleOnPassword}
            value={userDetails.password}
            placeholder="Password"
          /></li>
          <li><Input
            type="checkbox"
            onChange={handleHOD}
            value={userDetails.isHOD}
          /></li>
          </ul>
        </div>
        <Button onClick={handleSubmit}>Register</Button>
      </form>
    </div>
  );
};

export default FacultyRegister;
