import React from 'react'
let Counter =()=>{
    const [counter,setcount] = React.useState(0);
    const Increment = (value)=>{
        setcount(counter+value)
    }
    const Double = (value)=>{
            setcount(counter*value)
    }
   
    return (
        <>
        <h1>Counter</h1>
        <h2 style={{color: counter%2==0? "green":"red"}}>{counter}</h2>
        <button onClick={()=>Increment(-1)}>-</button>
        <button onClick={()=>Increment(1)}>+</button>
        <button onClick={()=>Double(2)}>2X</button>
        </>

    )
}

export default Counter;