import React from "react";
import '../styles/TodoCounter.css';
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <div>
      <h1 
      className="TodoCounter">
      My Tasks
    </h1>
    <p 
      className="TodoCounterCompleted" >
      You completed {completedTodos} of {totalTodos}
    </p>
    </div>
  );
}

export {TodoCounter};