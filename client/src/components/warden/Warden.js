import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import WardenInfo from "./WardenInfo";
import WardenLeave from "./WardenLeave";
import WardenAcceptLeave from "./WardenAcceptLeave";
import styles from './Warden.module.css';
import WardenRejectLeave from "./WardenRejectLeave";
import WardenComplaint from "./WardenComplaint";
import WardenComplaintAccept from "./WardenComplaintAccept";
import WardenComplaintReject from "./WardenComplaintReject";
import StudentRoomDetails from "../student/StudentRoomDetails";
import WardenRoomCreate from "./WardenRoomCreate";

const Warden = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("type")) {
        setIsLoggedIn(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    window.location.reload();
  };

  return (<>
  <h1 className={styles.head}>Warden</h1>
    <div className={styles.login}>
      
      {isLoggedIn && (
        <>
          <Button onClick={handleLogout}>Logout</Button>
          <WardenInfo />
          <WardenLeave />
          <WardenAcceptLeave />
          <WardenRejectLeave />
          <WardenComplaint />
          <WardenComplaintAccept />
          <WardenComplaintReject />
          {/* <StudentRoomDetails /> */}
          <WardenRoomCreate />
        </>
      )}
      {!isLoggedIn && <Link className={styles.link} to="/wardenLogin">Login</Link>}
    </div>
    </>
  );
};

export default Warden;
