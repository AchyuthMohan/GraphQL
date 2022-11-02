import React,{useState,useEffect} from 'react'
import axios from 'axios'
const JsonApi = () => {
    const[todos,setTodos]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/').then((response)=>{
            console.log(response.data)
            setTodos(response.data)
        })
    },[])
  return (
    <div>
        {todos.map((todo)=>{
            return(
                <h1 key={todo.id}>Id: {todo.id} , title: {todo.title} </h1>
            )
        })}
        
    </div>
  )
}

export default JsonApi