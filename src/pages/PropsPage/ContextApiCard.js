import React from 'react'

const ContextApiCard = ({name,age,batch}) => {
  return (
    <div className='main__card'>
        <h1>Name: {name}</h1>
        <h1>Class: {batch}</h1>
        <h1>Age: {age}</h1>
    </div>
  )
}

export default ContextApiCard