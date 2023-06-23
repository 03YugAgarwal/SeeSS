import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
// import Button from '../UI/Button'

const Student = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("type")) {
      setIsLoggedIn(true);
    }
  }, []);


  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    window.location.reload();
  }

  return (
    <div>
      <h1>Student Portal</h1>
      {isLoggedIn && <Button onClick={handleLogOut}>Logout</Button>}
      {!isLoggedIn && <>
        <Link to="/studentLogin">Login</Link>
        <Link to="/studentSignUp">SignUP</Link>
      </>}
    </div>
  );
};

export default Student;
