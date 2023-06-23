import React from 'react'
import StudentRegister from './components/student/StudentRegister'
import Button from './components/UI/Button'
import Input from './components/UI/Input'

const App = () => {
  return (
    <div>
      <Input />
      <StudentRegister />
      <Button>Hello</Button>
    </div>
  )
}

export default App