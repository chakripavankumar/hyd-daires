import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";


const App = () => {
  const [todos,SetTodos]= useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then( (responce)=>{
      SetTodos( responce.data.todos)
    })
  },[]);
  return (
    <div>
      {todos.map(({title,description})=> <Todo  title={title}  description={description}/>
      
    )}
    </div>
  )
}
 function Todo({title, description}){
  return <div>
  <h1>
  {title}
  </h1>
  <h3>
  {description}
  </h3>
  </div>
  
 }

export default App

