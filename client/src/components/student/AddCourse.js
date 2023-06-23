import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from './AddCourse.module.css';
const AddCourse = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:8000/api/v1/student/course/add-course", {
      method: "POST",
      body: JSON.stringify({
        courseId: value
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        if(json.message === "Invalid Course Id"){
            alert("Please enter a valid course id")
            return
        }
        
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.courseadd}>
      <h3>New course</h3>
      <Input placeholder="CourseId" onChange={handleChange} value={value} />
      <Button onClick={handleSubmit}>Register New Course</Button>
    </div>
  );
};

export default AddCourse;
