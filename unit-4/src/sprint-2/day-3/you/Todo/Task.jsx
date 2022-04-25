import React from "react";
import TaskItem from "./TaskItem";
// import "../../../../App.css"
// <style></style>
let Task = (props)=>{

    const [query, setQuery] = React.useState("");
    const [task, setTask] = React.useState([]);
    const handleChange = (e)=>{
        
        const {value} = e.target;
        setQuery(value)
    }
    const handleAdd = ()=>{
        const payload = {
            title : query,
            status: false,
        } 
        let newTasks = [...task, payload] 
        setTask(newTasks)
    }
    return (
        <>
        <div>
            <div id={props.id}>
                <input
                value={query} 
                onChange={handleChange} 
                placeholder="Add here something" />
                <button onClick={handleAdd}>+</button>
            </div>
            
            <div  id="task">
                {task.map((item)=>{
                    return <TaskItem title={item.title} status={item.status}/>
                })}
            </div>
        </div>
           

        </>
    )
}

export default Task;