import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description, setdescription]= useState("")
    return(
        <div>

        <input type="text" placeholder="title" onChange={function (e){
            const value= e.target.value;
            setTitle(e.target.value)
        }}></input> <br/>
        <input type="text" placeholder="description" onChange={function (e){
            const value= e.target.value;
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
                    "contentType":"application/json"
                }
            })
            .then(  async function(res){
                const json =  await res.json();
                alert("todo added")
            })
        }}>Add todo</button>
        </div>
    )
}