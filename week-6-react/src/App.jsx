import React, { useState } from 'react'


const App = () => {



  return (
    <div>
    <HeaderwithButton></HeaderwithButton>

   <Header title="pavan mayaa"></Header>
   <Header title="pavan mayaa"></Header>
   <Header title="pavan mayaa"></Header>
   
  
    </div>
  )
  
}
function HeaderwithButton(){
  const [title,setTitle]=useState("maya nenu pavan");
  function Updatetitle(){
    setTitle("my nam  is" + Math.random())
  }
  return (
    <div> <button onClick={Updatetitle}>Update the button</button>
    <Header title={title}></Header></div>
 
  )
}
function Header({title}) {
  return (
    <div>
      {title}
      
    </div>
  )
}

 


export default App
