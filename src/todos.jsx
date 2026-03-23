import React from 'react';
import './Todo.css';

const Todos = ({todo, onToggle, onDelete}) => {
  return (
    <div className="todo-item">
        <h1 className={`todo-title ${todo.isComplete ? 'completed' : 'pending'}`}>
            {todo.name}
        </h1>
        <div className="button-group">
            <button className="btn btn-complete" onClick={() => onToggle(todo.id)}>
                Mark Complete
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </div>
    </div>
  );
}

export default Todos;
