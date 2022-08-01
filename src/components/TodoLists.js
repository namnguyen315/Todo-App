import React from 'react'
import Todo from './Todo'


function TodoLists({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoLists