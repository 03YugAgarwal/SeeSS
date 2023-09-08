import React, { useState, useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!regno || !password) {
      setActive(false);
      return;
    } else if (regno.trim().length !== 9) {
      setActive(false);
      return;
    } else if (password.trim().length < 8) {
      setActive(false);
      return;
    } else {
      setActive(true);
    }
  }, [regno, password]);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegno = (e) => {
    setRegno(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!active) {
      alert("not active");
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
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "Logged in successfully") {
          localStorage.setItem("token", json.token);
          localStorage.setItem("type", "student");
        }
        console.log(json);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
    navigate("/student");
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-white text-5xl font-bold text-center my-20">
        Student Login
      </h2>
      <form
        action=""
        className="flex justify-center flex-col items-center border-solid border-white border-2 rounded-xl h-96 lg:w-1/3 mx-auto w-3/4 md:w-1/2"
      >
        <div className="flex flex-col mb-6">
          <label htmlFor="regno" className="font-bold">
            Registration Number:
          </label>

          <Input
            className="w-64 h-10 rounded-lg px-4 bg-black border-solid border-white border-2"
            value={regno}
            onChange={handleRegno}
            placeholder="21BCEABCD"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <Input
            value={password}
            onChange={handlePassword}
            placeholder="Password"
            className="w-64 h-10 rounded-lg px-4 bg-black border-solid border-white border-2"
          />
        </div>
        <Button
          onClick={handleLogin}
          disabled={!active}
          className="w-64 h-10  mt-6 border-solid border-white border-2 rounded-lg disabled:opacity-30 hover:bg-white hover:text-black transition-all delay-75 ease-in"
        >
          Log In
        </Button>
        <p className="mt-2 mb-6 font-light cursor-default">
          Not registered? {" "}
          <span
            className=" text-blue-200 underline hover:cursor-pointer underline-offset-2"
            onClick={() => navigate("/StudentSignUp")}
          >
            Create Account
          </span>
        </p>
      </form>
      <p className="italic fixed bottom-1 right-1">made by team SeeSS</p>
    </div>
  );
};

export default StudentLogin;
