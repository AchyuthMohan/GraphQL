import React from 'react'
import PropsCard from './PropsCard'
import ContextApiCard from './ContextApiCard'
import { studentData } from './data'
const PropsPage = () => {
  return (
    <div>
        {/* <PropsCard name='Achyuth' age='20' batch='CS5A' />
        <PropsCard name='Jaison' age='20' batch='CS5A' />
        <PropsCard name='Mayon' age='20' batch='CS5A' /> */}
        {/* <ContextApiCard name='Mayon' age='20' batch='CS5A'/>
        <ContextApiCard name='Jaison' age='20' batch='CS5A'/> */}
        {/* <PropsCard/>
        <PropsCard/>
        <PropsCard/>
        <PropsCard/> */}
        {studentData.map((student)=>{
            return(
                <ContextApiCard name={student.name} age={student.age} batch={student.batch}/>
            )
        })}
    </div>
  )
}

export default PropsPage