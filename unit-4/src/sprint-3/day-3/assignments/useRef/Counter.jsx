import {useState, useRef} from 'react';

// import { useState } from 'react';
export default function Counter() {
    const [count,setCount] = useState(0);
    const refX = useRef(10)
    console.log("hello")
    return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>{
              refX.current += 1
              console.log(refX.current)
          }}>Do Nothing</button>
      </div>
    </div>
  )
}
