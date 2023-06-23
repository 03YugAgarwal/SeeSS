import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";


const FacultyLogin = () => {
    const navigate = useNavigate();
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

    if (regno.length < 5 || regno.length > 5) {
      alert("Employee ID should be of length equal to 5");
      return;
    }
    if (password.length < 8) {
      alert("Password should be of length greater than or equal to 8");
      return;
    }

    fetch("http://localhost:8000/api/v1/faculty/auth/login", {
      method: "POST",
      body: JSON.stringify({
        empId: regno,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json.message === "Logged in successfully"){
            localStorage.clear()
            localStorage.setItem("token", json.token)
            localStorage.setItem("type","employee")
        }
        console.log(json);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
    
      navigate("/faculty");
  };

  return (
    <div>
      <h2>Faculty Login</h2>
      <form action="">
        <Input value={regno} onChange={handleRegno} placeholder="EmpID" />
        <Input
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        />
        <Button onClick={handleLogin}>Log In</Button>
      </form>
    </div>
  );
};

export default FacultyLogin;
