import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./StudentLogin.module.css";

const StudentLogin = () => {
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegno = (e) => {
    setRegno(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!regno || !password) {
      alert("Fill all fields");
      return;
    }

    if (regno.length < 9 || regno.length > 9) {
      alert("Reg No should be of length equal to 9");
      return;
    }
    if (password.length < 8) {
      alert("Password should be of length greater than or equal to 8");
      return;
    }

    fetch("http://localhost:8000/api/v1/student/auth/login", {
      method: "POST",
      body: JSON.stringify({
        regNo: regno,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json.message === "Logged in successfully"){
            localStorage.setItem("token", json.token)
            localStorage.setItem("type","student")
        }
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
      <ul>
      <h2>Student Login</h2>
        <li>
        <Input 
          value={regno} 
          onChange={handleRegno} 
          placeholder="RegNo" />
        </li>
        <li>
          <Input
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        />
        </li>
        </ul>
        <Button onClick={handleLogin}>Log In</Button>
      </form>
    </div>
  );
};

export default StudentLogin;
