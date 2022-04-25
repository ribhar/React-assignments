
import React from "react"


function Funl() {
  let [count, setCount] = React.useState(0);
  const handle = (v)=>{
    setCount(count+v)
    count += v;
    console.log(count)
  }
  return (
      <>
      <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={()=>handle(1)}>+</button>
      <button onClick={()=>handle(-1)}>-</button>
    </div>
      </>
    
  );
}

export default Funl;
