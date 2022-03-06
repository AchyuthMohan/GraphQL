import React, { useEffect, useState } from 'react'
const LAUNCHES_QUERY=`
{
  launchesPast(limit: 10) {
    id
    mission_name
    
  }
}
`
const App = () => {
  
  const[launches,setLaunches]=useState([]);
  useEffect(()=>{
    fetch('https://api.spacex.land/graphql/',{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({query:LAUNCHES_QUERY})
    }).then(response=>response.json())
    .then(data=>setLaunches(data))
    
  },[])
  return (
    <div>
     <h1>Spacex Launches:</h1> 
     <ul>
      {launches.map((launch)=>(
        <li key={launch.id}>{launch.mission_name}</li>
      ))}
     </ul>

    </div>
  )
}

export default App