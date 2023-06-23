import React from "react";
import StudentRegister from "./components/student/StudentRegister";
// import Button from './components/UI/Button'
// import Input from './components/UI/Input'
import StudentLogin from "./components/student/StudentLogin";
import Button from "./components/UI/Button";
import StudentInfo from "./components/student/StudentInfo";
import FacultyLogin from "./components/faculty/FacultyLogin";
import FacultyRegister from "./components/faculty/FacultyRegister";

import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/student/Student";
import Faculty from "./components/faculty/Faculty";
import Warden from "./components/warden/Warden";
import WardenLogin from "./components/warden/WardenLogin";

const App = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
  };

  return (
    // <div>
    //   {/* <StudentRegister /> */}
    //   <StudentLogin />
    //   {/* <StudentInfo /> */}
    //   <FacultyRegister />
    //   <Button onClick={handleLogout}>Logout</Button>
    // </div>
    //   <FacultyLogin />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/warden" element={<Warden />} />
        <Route path="/wardenLogin" element={<WardenLogin />} />
        <Route path="/facultyLogin" element={<FacultyLogin/>} />
        <Route path="/facultySignUp" element={<FacultyRegister/>} />
        <Route path="/studentLogin" element={<StudentLogin/>} />
        <Route path="/studentSignUp" element={<StudentRegister/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
