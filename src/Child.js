import React, { useContext } from 'react'
import {UserDataContext} from './App'
import NestedChild from './NestedChild'

const Child = () => {

    const {name,setName}=useContext(UserDataContext)
  return (
    <div>
      <h4>Child Component</h4>
      <h3>{name}</h3>
      <button onClick={()=>setName("Nisha")}>Change Name</button>
      <NestedChild />
    </div>
  )
}

export default Child
