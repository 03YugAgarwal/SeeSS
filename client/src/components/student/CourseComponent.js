import React from 'react'

const CourseComponent = (props) => {
  return (
    <div>
        <h6>ID: {props.id}</h6>
        <h6>courseName: {props.courseName}</h6>
        <h6>courseCode: {props.courseCode}</h6>
        <h6>courseType: {props.courseType}</h6>
        <h6>courseCredits: {props.courseCredits}</h6>
        <h6>courseTeacherId: {props.courseTeacherId}</h6>
    </div>
  )
}

export default CourseComponent