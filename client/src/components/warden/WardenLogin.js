import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";


const WardenLogin = () => {
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

    if (regno!== 'A' && regno !=="B" && regno!=="C" && regno!=="D") {
      alert("Wrong Block");
      return;
    }
    if (password.length < 8) {
      alert("Password should be of length greater than or equal to 8");
      return;
    }

    fetch("http://localhost:8000/api/v1/warden/auth/login", {
      method: "POST",
      body: JSON.stringify({
        block: regno,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json.message === "Warden Logged In"){
            localStorage.clear()
            localStorage.setItem("token", json.token)
            localStorage.setItem("type","warden")
        }
        console.log(json);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
    
      navigate("/warden");
  };

  return (
    <div>
      <h2>Warden Login</h2>
      <form action="">
        <Input value={regno} onChange={handleRegno} placeholder="Block" />
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

export default WardenLogin;
