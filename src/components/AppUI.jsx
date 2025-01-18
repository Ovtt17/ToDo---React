import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext } from './TodoContext';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    changeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
        
      <TodoList>
        {error && <p>Sorry, there was an error..</p>}
        {loading && <p>We are loading, do not despair...</p>}
        {(!loading && !searchedTodos.length) && <p>Create your first TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onChange={() => changeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };