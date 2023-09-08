import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";

const inputStyle =
  "w-64 h-10 rounded-lg px-4 bg-black border-solid border-white border-2";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false)
  const [userDetails, setUserDetails] = useState({
    name: "",
    regno: "",
    block: "",
    password: "",
    roomno: "",
  });

  useEffect(()=>{
    if (
      !userDetails.name ||
      !userDetails.regno ||
      !userDetails.roomno ||
      !userDetails.password ||
      !userDetails.block
    ) {
      setActive(false);
      return;
    }else if (userDetails.regno.length < 9 || userDetails.regno.length > 9) {
      setActive(false)
      return;
    }else if (userDetails.password.length < 8) {
      setActive(false);
      return;
    }else if (userDetails.name.length < 3) {
      setActive(false);
      return;
    }else if (
      userDetails &&
      userDetails.block !== "A" &&
      userDetails.block !== "B" &&
      userDetails.block !== "C" &&
      userDetails.block !== "D"
    ) {
      setActive(false);
      return;
    }else{
      setActive(true)
    }
  },[userDetails])

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

    if(!active){
      alert('Fill in information properly')
      return
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

    navigate("/studentLogin");
  };

  return (
    <div>
      <h2 className="text-white text-5xl font-bold text-center my-16">
        Student Register
      </h2>
      <form
        action=""
        className="flex justify-center flex-col items-center border-solid border-white border-2 rounded-xl lg:w-1/3 mx-auto w-3/4 md:w-1/2"
      >
        <div className="flex flex-col mb-2 mt-8">
          <label htmlFor="name" className="font-bold">
            Name:
          </label>
          <Input
            type="text"
            onChange={handleOnName}
            value={userDetails.name}
            placeholder="John Doe"
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="RegNo" className="font-bold">
            RegNo:
          </label>
          <Input
            type="text"
            onChange={handleOnReg}
            value={userDetails.regno}
            placeholder="21BCEABCD"
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="block" className="font-bold">
            Block:
          </label>
          <Input
            type="text"
            onChange={handleOnBlock}
            value={userDetails.block}
            placeholder="A/B/C/D"
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="Password" className="font-bold">
            Password:
          </label>
          <Input
            type="text"
            onChange={handleOnPassword}
            value={userDetails.password}
            placeholder="Password"
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="RoomNo" className="font-bold">
            RoomNo:
          </label>
          <Input
            type="text"
            onChange={handleOnRoomNo}
            value={userDetails.roomno}
            placeholder="123"
            className={inputStyle}
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="w-64 h-10 border-solid mt-2 border-white border-2 rounded-lg disabled:opacity-30 hover:bg-white hover:text-black transition-all delay-75 ease-in"
          disabled={!active}
        >
          Register
        </Button>
        <p className="mt-2 mb-6 font-light cursor-default">
          Already have an Account?{" "}
          <span
            className=" text-blue-200 underline hover:cursor-pointer underline-offset-2"
            onClick={() => navigate("/StudentLogin")}
          >
            Click to Signin
          </span>
        </p>
      </form>
      <p className="italic fixed bottom-1 right-1">made by team SeeSS</p>
    </div>
  );
};

export default StudentRegister;
