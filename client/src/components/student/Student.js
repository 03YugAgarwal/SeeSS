import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import StudentLeave from "./Leave/StudentLeave";
import StudentComplaints from "./Compaints/StudentComplaints"
// import Button from '../UI/Button'
import styles from "./Student.module.css";
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
      <h1 className={styles.greet}>Student Portal</h1>
      <div className={styles.card}>
        {isLoggedIn && (
          <>
            <Button onClick={handleLogOut}>Logout</Button>
            <StudentLeave />
            <StudentComplaints />
          </>
        )}

        {!isLoggedIn && (
          <>
            <div>
              <Link to="/studentLogin">Login</Link>
            </div>
            <div>
              <Link to="/studentSignUp">SignUP</Link>
            </div>
          </>
        )}
      </div>
    <h1 className={styles.greet}>Student Portal</h1>

    <div className={styles.card}>  
      {isLoggedIn && <Button onClick={handleLogOut}>Logout</Button>}
      {!isLoggedIn && <>
       <div className={styles.card1}><h1><Link to="/studentLogin">Login</Link></h1></div> 

       <div className={styles.card2}><h1><Link to="/studentSignUp">SignUP</Link></h1></div> 
      </>}
    </div>
    </>
  );
};

export default Student;
