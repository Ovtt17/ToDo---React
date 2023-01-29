import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton'
// import './App.css';

const todos = [
  {text: 'Study JavaScript', completed: false },
  {text: 'Learn React', completed: false },
  {text: 'Wash the dishes', completed: false },
  {text: 'Learn English', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem  
          key={todo.text} 
          text={todo.text}
          completed= {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
