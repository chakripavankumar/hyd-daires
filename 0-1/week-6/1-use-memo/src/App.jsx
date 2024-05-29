import { useState ,useMemo} from 'react'
import './App.css'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'
import { Assignment3 } from './components/Assignment3'

function App() {
  const [count, setCount] = useState(0);
  const memoizedCount = useMemo(() => count, [count]);
  function increment(){
     setCount(count+1)
  };
  return (
    <div>
    <p>Count: {memoizedCount}</p>
    <button onClick={increment}>Increment</button>

      <Assignment1 />
   
      {/* <Assignment2 /> */}
      {/* <Assignment3 /> */}
      </div>
  )
}

export default App
