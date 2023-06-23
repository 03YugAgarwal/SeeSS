import React from 'react'
import { Link } from "react-router-dom";
// import Button from '../UI/Button'

const Faculty = () => {



  return (
    <div>
      <h1>Faculty Portal</h1>
      <Link to="/facultyLogin">Login</Link>
      <Link to="/facultySignUp">SignUP</Link>
    </div>
  )
}

export default Faculty