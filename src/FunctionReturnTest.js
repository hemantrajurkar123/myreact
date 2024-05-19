import React from 'react'

const FunctionReturnTest = () => {

    function bake(temp){
    let message=''
    if (temp>200){
        message='I am boiling'
    }else if(temp<100){
        message="I am freezing"
    }else{
        message='This is a comfortable temp for me'
    }
    return message;
    }
   const finalMessage= bake(300)
  return (
    <div>
      <h3>{finalMessage}</h3>
    </div>
  )
}

export default FunctionReturnTest
