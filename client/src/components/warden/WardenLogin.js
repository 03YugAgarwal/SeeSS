import React, { useState } from 'react'
import Input from '../UI/Input'

const WardenLogin = () => {

    const [block, setBlock] = useState("")

    const handleBlockChange = (e) => {
        setBlock(e.target.value)
    }

  return (
    <div>
        <form action="">
            <Input placeholder="block" onChange={handleBlockChange} value={block}/>
            <Input placeholder="block" onChange={handleBlockChange} value={block}/>
        </form>
    </div>
  )
}

export default WardenLogin