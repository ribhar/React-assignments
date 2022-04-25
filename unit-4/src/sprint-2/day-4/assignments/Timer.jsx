import React from 'react'

export default function Timer() {
    
    const [start, setStart] = React.useState(0)
    const [end, setEnd] = React.useState(0)
    const [value, setValue] = React.useState(true)
    const [count, setCount] = React.useState(0)

    React.useEffect(()=>{
        let id = setInterval(() => {
            setStart((start)=>{
                if(start == end){
                    clearInterval(id)
                    return start
                }
                return Number(start)+1;
            })
            
        }, 1000);
    },[value])

    

    const handleInitial = (e)=>{
        // console.log(e.target.value)
        setStart(e.target.value);
    }
    const handleEnd = (e)=>{
        // console.log(e.target.value)
        setEnd(e.target.value);
    }
    
  return (
    <div>
        
        <h1>{start}</h1>
        <h1>{end}</h1>
      <input onChange={handleInitial} type="number" placeholder='Initial Time' value={start}/>
      <input onChange={handleEnd} type="number" placeholder='End Time' value={end}/>
      <button onClick={()=> setValue(!value)}>Start</button>
      
    </div>
  )
}
