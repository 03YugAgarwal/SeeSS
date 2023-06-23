import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import StudentLeave from "./Leave/StudentLeave";
import StudentComplaints from "./Compaints/StudentComplaints";
// import Button from '../UI/Button'
import styles from "./Student.module.css";
import StudentRoomDetails from "./StudentRoomDetails";
import StudentMessDetails from "./StudentMessDetails";
import CourseComponent from "./CourseComponent";
import StudentRegister from "./StudentRegister";
import StudentRegistered from "./StudentRegistered";
import AllCourses from "./AllCourses";
import AddCourse from "./AddCourse";
import StudentInfo from "./StudentInfo";
const Student = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("type")) {
        setIsLoggedIn(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    window.location.reload();
  };

  return (
    <>
      <div className={styles.cards}>
        <h1 className={styles.greet}>Student Portal</h1>

        {isLoggedIn && (
          <>
            <Button onClick={handleLogOut}>Logout</Button>
            <StudentInfo />
            <StudentLeave />
            <StudentComplaints />
            <StudentMessDetails />
            <StudentRoomDetails />
            <StudentRegistered />
            <AllCourses />
            <AddCourse />
          </>
        )}
        {!isLoggedIn && (
          <>
            <div className={styles.card1}>
              <h1 className={styles.card}>
                <Link to="/studentLogin">Login</Link>
              </h1>
            </div>

            <div className={styles.card2}>
              <h1 className={styles.card}>
                <Link to="/studentSignUp">SignUP</Link>
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Student;
