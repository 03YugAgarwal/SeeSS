import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import StudentInfo from "./StudentInfo";

// import Button from '../UI/Button'

const Student = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("type")) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigate("/studentLogin");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    window.location.reload();
  };

  const listStyle =
    "py-2 h-12 w-1/6 text-lg text-center cursor-pointer hover:bg-white hover:text-black";

  return (
    <>
      <div>
        <nav>
          <ul className="flex flex-wrap border-b-2">
            <li className={listStyle} onClick={() => navigate("./leave")}>
              Leave
            </li>
            <li className={listStyle} onClick={() => navigate("./compaints")}>
              Complaints
            </li>
            <li className={listStyle} onClick={() => navigate("./mess")}>
              Mess Details
            </li>
            <li className={listStyle} onClick={() => navigate("./room")}>
              Room Details
            </li>
            <li className={listStyle} onClick={() => navigate("./allcourses")}>
              All Courses
            </li>
            <li className={listStyle} onClick={() => navigate("./addcourses")}>
              Register Course
            </li>
          </ul>
        </nav>
        {isLoggedIn && (
          <>
            <Button
              onClick={handleLogOut}
              className="fixed bottom-2 left-2 w-32 h-10 border-solid mt-2 border-white border-2 rounded-lg disabled:opacity-30 hover:bg-white hover:text-black transition-all delay-75 ease-in"
            >
              Logout
            </Button>
            <StudentInfo />
          </>
        )}
        {!isLoggedIn && <p>Not logged in</p>}
        <p className="italic fixed bottom-1 right-1">made by team SeeSS</p>
      </div>
    </>
  );
};

export default Student;
