import React from "react";
import Todo from "./Todo";

function TodoLists({ todoList, checkButtonClick, handleDeleteTodo }) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          checkButtonClick={checkButtonClick}
        />
      ))}
    </div>
  );
}

export default TodoLists;
