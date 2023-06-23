import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import WardenInfo from "./WardenInfo";
import WardenLeave from "./WardenLeave";
import WardenAcceptLeave from "./WardenAcceptLeave";
import WardenRejectLeave from "./WardenRejectLeave";

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

  return (
    <div>
      <h2>Warden</h2>
      {isLoggedIn && (
        <>
          <Button onClick={handleLogout}>Logout</Button>
          <WardenInfo />
          <WardenLeave />
          <WardenAcceptLeave />
          <WardenRejectLeave />
        </>
      )}
      {!isLoggedIn && <Link to="/wardenLogin">Login</Link>}
    </div>
  );
};

export default Warden;
