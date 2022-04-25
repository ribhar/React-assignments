import React from 'react'

const Todo = () => {

    const [title, setTitle] = React.useState("");
    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    const [page, setPage] = React.useState(1)
    
    React.useEffect(()=>{
       getTodos(page)
    }, [page]);

    const getTodos = (page = 1)=>{
        setIsLoading(true);
        return fetch(`http://localhost:3000/posts?_page=${page}&_limit=2`)
        .then(res=>res.json())
        .then(res =>{
            console.log(res)
            setData(res)
        })
        .catch((err)=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false)
        });
    }
    
    const addTodods = async (title) =>{
        console.log(title)
        const payload = {
            title,
            status: false
        }
        console.log(payload)
        setIsLoading(true);
        return fetch("http://localhost:3000/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res =>{
            console.log(res)
           return getTodos();
        })
        .catch((err)=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false)
        });
    }

  return isLoading ? (
      <div>...loading</div>
  ) : isError ? (
      <div>something went wrong</div>
  ) : (
    <div>
        <div>
        <input value={title} onChange={e=> setTitle(e.target.value)} placeholder='add something' />
        <button onClick={()=> addTodods(title)}>ADD</button>
        </div>
        <ul>
            {data.map((item)=>(
                <li key ={item.id}>{`${item.title}- ${item.status}`}</li>
            ))}
        </ul>
        <h3>Page : {page}</h3>
        <button disabled={page ===1} onClick={()=> setPage(page - 1)}>Prev</button>
        <button onClick={()=> setPage(page + 1)}>Next</button>

    </div>
  )

    
//   )
}

export default Todo
