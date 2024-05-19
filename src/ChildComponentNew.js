import React, { useState } from 'react'


const ChildComponentNew = ({passToChild}) => {
    const [userName,setUserName]=useState('')
    const handleClick=(e)=>{
        e.preventDefault()
        passToChild(userName)
    }
  return (
    <div>
      <input
      type='text'
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      ></input>
      <button onClick={handleClick}>Pass Data To Parent</button>
    </div>
  )
}

export default ChildComponentNew
