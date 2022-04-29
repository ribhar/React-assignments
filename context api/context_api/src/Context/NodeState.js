import React,{useState} from "react";
import NoteContext from "./NodeContext";

const NoteState = (props)=>{
    const [count,setCount] = useState(0);
    const update =()=>{
        setCount(count+1)
    }
    const state ={
        "name": "Ritik",
        "class": "10A"
    }
    const state2 ={
        "name": "Aakash",
        "class": "20A"
    }
    return (
        <NoteContext.Provider value={{state,state2,count,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;