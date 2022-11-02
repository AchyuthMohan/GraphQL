import React from 'react'
import './PropsCard.css'
const PropsCard = (props) => {
  return (
    <div className='main__card'>
        <h1>Name: {props.name}</h1>
        <h1>Class: {props.batch}</h1>
        <h1>Age: {props.age}</h1>
    </div>
  )
}

export default PropsCard