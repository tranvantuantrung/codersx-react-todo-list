import React from 'react';
import './App.css';

const todos = ['Go to market', 'Buy food', 'Make dinner'];

const todoItem = todos.map((item) => <li key={item}>{item}</li>);

function App() {
  return (
    <div className="App">
      <ul className="todo-List">{todoItem}</ul>
    </div>
  );
}

export default App;
