import { useState } from "react"

function App() {
 const [count,setCount]= useState(0)

  return (
    <>
      <Count count={count}/>
      <Butoon count={count} setCount={setCount}/>
    </>
  )
}


 function Count({count}) {
  return (
    <div>
    {count}
    </div>
  )
 }
  function Butoon ({count, setCount}){
 return (
  <div>
  <button onClick={()=>{
 setCount(count+1)
  }}> INcrease </button>
  <button onClick={()=>{
  setCount(count -1)  }}>
  Decrese
  </button>
  </div>
 )
  }
export default App
