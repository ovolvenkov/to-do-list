import React from "react";
import TodoList from "./Todo/TodoList"

function App() {
  const todos = [
    {id: 1, complete: false, title: 'buy bread'},
    {id: 2, complete: false, title: 'buy milk'},
    {id: 3, complete: false, title: 'buy butter'},
  ]

  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
