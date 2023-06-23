import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
// import Button from '../UI/Button'

const Faculty = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("type")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    window.location.reload();
  };

  return (
    <div>
      <h2>Faculty</h2>
      {isLoggedIn&&<Button onClick={handleLogOut}>Log Out</Button>}
      {!isLoggedIn && <>
        <Link to="/facultyLogin">Login</Link>
        <Link to="/facultySignUp">SignUP</Link>
      </>}
    </div>
  );
};

export default Faculty;
