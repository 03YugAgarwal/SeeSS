import React from "react";
import StudentRegister from "./components/student/StudentRegister";
// import Button from './components/UI/Button'
// import Input from './components/UI/Input'
import StudentLogin from "./components/student/StudentLogin";
// import Button from "./components/UI/Button";
// import StudentInfo from "./components/student/StudentInfo";
import FacultyLogin from "./components/faculty/FacultyLogin";
import FacultyRegister from "./components/faculty/FacultyRegister";

import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Student from "./components/student/Student";
import Faculty from "./components/faculty/Faculty";
import Warden from "./components/warden/Warden";
import WardenLogin from "./components/warden/WardenLogin";


import StudentLeave from "./components/student/Leave/StudentLeave";
import StudentComplaints from "./components/student/Compaints/StudentComplaints";
import StudentRoomDetails from "./components/student/StudentRoomDetails";
import StudentMessDetails from "./components/student/StudentMessDetails";

import StudentRegistered from "./components/student/StudentRegistered";
import AllCourses from "./components/student/AllCourses";
import AddCourse from "./components/student/AddCourse";


const App = () => {


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
        <Route path="/student/leave" element={<StudentLeave />} />
        <Route path="/student/complaints" element={<StudentComplaints />} />
        <Route path="/student/mess" element={<StudentMessDetails />} />
        <Route path="/student/room" element={<StudentRoomDetails />} />
        <Route path="/student/registered" element={<StudentRegistered />} />
        <Route path="/student/allCourses" element={<AllCourses />} />
        <Route path="/student/addCourse" element={<AddCourse />} />
        
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
// const router = createBrowserRouter([
// 	{path: '/',element: <Home />},
//     {path: '/student', element: <Student />,children:[
//         {path: '/leave', element: <StudentLeave />},
//         {path: '/complaints', element: <StudentComplaints />},
//         {path: '/mess', element: <StudentMessDetails />},
//         {path: '/room', element: <StudentRoomDetails />},
//         {path: '/registered', element: <StudentRegistered />},
//         {path: '/allCourses', element: <AllCourses />},
//         {path: '/addCourse', element: <AddCourse />},
//     ]},
//     {path: '/faculty', element: <Faculty />},
//     {path: '/warden', element: <Warden />},
//     {path: '/wardenLogin', element: <WardenLogin />},
//     {path: '/facultyLogin', element: <FacultyLogin/>},  
//     {path: '/facultySignUp', element: <FacultyRegister/>},
//     {path: '/studentLogin', element: <StudentLogin/>},
//     {path: '/studentSignUp', element: <StudentRegister/>},
// ])

// function App() {
//   return <RouterProvider router={router}/>;
// }

export default App;
