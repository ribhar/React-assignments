import React from "react";
import TaskItem from "./TaskItem";

let Task = ()=>{
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
                <input value={query} 
                onChange={handleChange} 
                placeholder="Add here something" />
            </div>
            <button onClick={handleAdd}>ADD</button>
            <div>
                {task.map((item)=>{
                    return <TaskItem title={item.title} status={item.status}/>
                })}
            </div>

        </>
    )
}

export default Task;