import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
// import Button from '../UI/Button'
import styles from "./Faculty.module.css";

const Faculty = () => {
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
    <div className={styles.card}>
      <h1 className={styles.head}>Faculty</h1>
      {isLoggedIn && <Button onClick={handleLogOut}>Log Out</Button>}
      {!isLoggedIn && (
        <>
          <div className={styles.login}><h1 className={styles.h1}><Link to="/facultyLogin">Login</Link></h1></div>
          <div className={styles.signup}><h1 className={styles.h1}><Link to="/facultySignUp">SignUP</Link></h1> </div>
        </>
      )}
    </div>
  );
};

export default Faculty;
