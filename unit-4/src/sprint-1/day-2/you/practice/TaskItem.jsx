import React from 'react'

const TaskItem = ({title,status}) => {
  return (
    <div>
      <h3>{`${title} - ${status}`}</h3>
    </div>
  )
}

export default TaskItem
