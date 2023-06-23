import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/student/Student";
import Faculty from "./components/faculty/Faculty";
import Warden from "./components/warden/Warden";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    student: false,
    faculty: false,
    warden: false,
  });

  const [showLogIn, setShowLogIn] = useState(false)

  useEffect(() => {
    const value = localStorage.getItem("isLoggedIn");
    if (value === 'student') {
      setIsLoggedIn({
       ...isLoggedIn,
        student: true,
      })
    }else if (value === 'warden'){
      setIsLoggedIn({
        ...isLoggedIn,
        warden: true,
      })
    }else if (value === 'faculty'){
      setIsLoggedIn({
        ...isLoggedIn,
        faculty: true,
      })
    }

    if(value){
      setShowLogIn(false)
    }else{
      setShowLogIn(true)

    }
    


  }, []);

  const setStudentLogIn = () => {
    if (!isLoggedIn.student) {
      localStorage.setItem("isLoggedIn", "student");
      setIsLoggedIn({
        student: true,
        faculty: false,
        warden: false,
      });
    } else {
      localStorage.clear();
      setIsLoggedIn({
        student: false,
        faculty: false,
        warden: false,
      });
    }
    setShowLogIn(false)
  };
  const setFacultyLogin = () => {
    if (!isLoggedIn.faculty) {
      localStorage.setItem("isLoggedIn", "faculty");
      setIsLoggedIn({
        student: false,
        faculty: true,
        warden: false,
      });
    } else {
      localStorage.clear();
      setIsLoggedIn({
        student: false,
        faculty: false,
        warden: false,
      });
    }
    setShowLogIn(false)
  };
  const setWardenLogin = () => {
    if (!isLoggedIn.warden) {
      localStorage.setItem("isLoggedIn", "warden");
      setIsLoggedIn({
        student: false,
        faculty: false,
        warden: true,
      });
    } else {
      localStorage.clear();
      setIsLoggedIn({
        student: false,
        faculty: false,
        warden: false,
      });
    }
    setShowLogIn(false)
  };

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    setShowLogIn(true)
  }

  return (
    <div className="App">
      SeeSS
      {showLogIn && <button onClick={setStudentLogIn}> Student </button>}
      {showLogIn &&<button onClick={setFacultyLogin}> Faculty </button>}
      {showLogIn &&<button onClick={setWardenLogin}> Warden </button>}
      {isLoggedIn.student && <Student />}
      {isLoggedIn.faculty && <Faculty />}
      {isLoggedIn.warden && <Warden />}
      {!showLogIn&&<button onClick={handleLogOut}>Logout</button>}
    </div>
  );
}

export default App;
