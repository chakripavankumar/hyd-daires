import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Go to the gym",
      description: "Maya gym ki vellu ra"
    },
    {
      id: 1,
      title: "Go to the gym",
      description: "Maya gym ki vellu ra"
    },
    {
      id: 2,
      title: "Go to the gym",
      description: "Maya gym ki vellu ra"
    },
  ]);

  function addTodo() {
    const newTodo = {
      id: Math.random(),
      title: "New Todo",
      description: "Description for new todo"
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
