import React from "react";
import '../styles/TodoCounter.css';

function TodoCounter({total, completed}) {

  return (
    <div>
      <h2 
      className="TodoCounter">
      My Tasks
    </h2>
    <p 
      className="TodoCounterCompleted" >
      You completed {completed} of {total}
    </p>
    </div>
  );
}

export {TodoCounter};