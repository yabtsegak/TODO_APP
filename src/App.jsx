import React from 'react';
import Todos from './todos.jsx';
import { useState,useReducer } from 'react';
import './Form.css'

const Action={
  Action_TODO:"ADD_TODO",
  togel:'TOGEL',
  delete:'DELETE'
}
 function reducer(state, action) {
  switch (action.type) {  // ✅ Use colon, not comma
    case 'ADD_TODO':
      return [...state, fun(action.payload.name)];  // ✅ Access payload correctly
    case 'TOGEL':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }

}

  function fun(name){
    return {name:name,id:Date.now(),isComplete:false}
  }
const App = () => {
  const[name,setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const handelClick=(e)=>{
     if (!name.trim()) {
      alert('Please enter a todo item');
       e.preventDefault();  // Optional: show message
      return;  // Stop submission
    }// ✅ Check for empty input
    e.preventDefault();
    dispatch({type:Action.Action_TODO,payload:{name:name}})
    setName('');
  }
  const handelTogel=(id)=>{
    dispatch({type:Action.togel,payload:{id:id}})
  }
  const handelDelete=(id)=>{
    dispatch({type:Action.delete,payload:{id:id}})
  }

  console.log(todos);
  return (
    <div>
      <form onSubmit={handelClick}>  {/* ✅ Removed empty action, fixed spelling */}
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}  // ✅ Capitalize setName
        />
        <button type="submit">Submit</button>  {/* ✅ Added submit button */}
      </form>
      <div>
        {todos.map((todo) => (
          <Todos key={todo.id} todo={todo} onToggle={handelTogel} onDelete={handelDelete} />  // ✅ Use lowercase 'todos' and add key prop
        ))}
      </div>  {/* ✅ Added key prop */} 
    </div>
  );
}

export default App;
