
// This component is to practice lifting state up- child to parent data transfer
// Steps
//1. Create a function in the parent component
//2. Pass this function in the child component
//3. Call this function in the child component
//4. The execution of this function will happen in the parent component
import React from 'react'
import ChildComponentNew from './ChildComponentNew'

const ParentComponent = () => {
    const passToChild=(name)=>{
        console.log("The name is ", name)

    }
  return (
    <div>
      <ChildComponentNew passToChild={passToChild}/>
    </div>
  )
}

export default ParentComponent
