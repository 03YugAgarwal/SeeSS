import React from 'react'
import StudentRegister from './components/student/StudentRegister'
// import Button from './components/UI/Button'
// import Input from './components/UI/Input'
import StudentLogin from './components/student/StudentLogin'
import Button from './components/UI/Button'
import StudentInfo from './components/student/StudentInfo'

const App = () => {

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('type')
  }

  return (
    <div>
      <StudentRegister />
      <StudentLogin />
      <StudentInfo />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default App