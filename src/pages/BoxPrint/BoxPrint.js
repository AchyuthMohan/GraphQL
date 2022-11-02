import React, { useState } from 'react'
import Box from '../../components/Box/Box'
const BoxPrint = () => {
    const[show,setShow]=useState(false)

    const showModal=()=>{
        setShow(true)
    }
    const hideModal=()=>{
        setShow(false)
    }
  return (
    <div>
        {/* <button onClick={()=>{
            setShow(!show)
        }}>Click Me</button> */}
        <button onClick={showModal}>Show</button>
        <button onClick={hideModal}>Hide</button>
        {show?<Box/>:null}
        
        
    </div>
  )
}

export default BoxPrint