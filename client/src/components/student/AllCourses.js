import React, { useEffect, useState } from "react";
import CourseComponent from "./CourseComponent";
import Button from "../UI/Button";

const AllCourses = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/course/get-all", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //   console.log(data);
        setLoading(false);
        setDetails(data);
        //   setValue(details.data)
      })
      .then((error) => {
        console.error(error);
      });

    return () => {};
  }, []);

  const manageCourses = () => {
    setShow((p) => !p);
  };

  return (
    <div>
      {show && !loading && (
        <>
          {details ? (
            <p>No Courses</p>
          ) : (
            details.map((e) => {
              return <CourseComponent e={e}/>;
            })
          )}
        </>
      )}
      <Button onClick={manageCourses}>Show All Courses</Button>
    </div>
  );
};

export default AllCourses;
