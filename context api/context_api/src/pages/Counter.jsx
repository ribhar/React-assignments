import React from 'react'
import { useParams } from 'react-router'

function Counter() {
   const {count} = useParams()
   console.log(count)
  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  )
}

export default Counter
