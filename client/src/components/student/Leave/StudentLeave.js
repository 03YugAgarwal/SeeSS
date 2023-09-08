import React, { useEffect, useState } from "react";
import StudentLeaveItem from "./StudentLeaveItem";
import StudentNewLeave from "./StudentNewLeave";
import StudentUpdateLeave from "./StudentUpdateLeave";
import StudentDeleteLeave from "./StudentDeleteLeave";

import { useNavigate } from "react-router-dom";
const StudentLeave = () => {
  const [leave, setLeave] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLeave, setIsLeave] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/leave", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setLeave(data);
        console.log(data);
        setIsLeave(true);
        if (leave == null) {
          setIsLeave(false);
          // console.log("Wrong");
        }
      })
      .catch((error) => console.error(error));
  }, [leave]);

  const listStyle =
    "py-2 h-12 w-1/6 text-lg text-center cursor-pointer hover:bg-white hover:text-black";

  return (
    <>
      <div>
        <nav>
          <ul className="flex flex-wrap border-b-2">
            <li className={`bg-white text-black ${listStyle}`}>Leave</li>
            <li
              className={listStyle}
              onClick={() => navigate("../student/compaints")}
            >
              Complaints
            </li>
            <li
              className={listStyle}
              onClick={() => navigate("../student/mess")}
            >
              Mess Details
            </li>
            <li
              className={listStyle}
              onClick={() => navigate("../student/room")}
            >
              Room Details
            </li>
            <li
              className={listStyle}
              onClick={() => navigate("../student/allcourses")}
            >
              All Courses
            </li>
            <li
              className={listStyle}
              onClick={() => navigate("../student/addcourses")}
            >
              Register Course
            </li>
          </ul>
        </nav>
        <h3>Leaves:</h3>
        {!loading && isLeave ? (
          <ul>
            {leave.data.map((e) => {
              return <StudentLeaveItem key={e.id} e={e} />;
            })}
          </ul>
        ) : (
          <p>No Leave Found</p>
        )}

        <StudentNewLeave />
        <StudentUpdateLeave />
        <StudentDeleteLeave />
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("type");
          navigate('../')
        }}
        className="fixed bottom-2 left-2 w-32 h-10 border-solid mt-2 border-white border-2 rounded-lg disabled:opacity-30 hover:bg-white hover:text-black transition-all delay-75 ease-in"
      >
        Logout
      </button>
      <p className="italic fixed bottom-1 right-1">made by team SeeSS</p>
    </>
  );
};

export default StudentLeave;
