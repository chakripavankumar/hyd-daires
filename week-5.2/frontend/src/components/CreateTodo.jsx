import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description, setdescription]= useState("");
    return(
        <div>
        <input 
         style={{padding:20, margin:20}}
         type="text" placeholder="title" onChange={function (e){
            setTitle(e.target.value)
        }}></input> <br/>
        <input type="text" placeholder="description" onChange={function (e){
            setdescription(e.target.value)
        }}></input> <br/>
        <button onClick={()=>{
            fetch("http://localhost:3000/todo" ,{
                method:"POST",
                body: JSON.stringify({
                   title:title,
                   description:description
                }), 
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(  async function(res){
                 await res.json();
                alert("todo added")
            })
        }}>Add todo</button>
        </div>
    )
}