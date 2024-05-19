import React, { useContext } from 'react'
import { UserDataContext } from './App'

function NestedChild() {
    const anotherData=useContext(UserDataContext)
  return (
    <div>
      <h3>Nested Component in Child Component</h3>
      <h4>{anotherData.location}</h4>
    </div>
  )
}

export default NestedChild
