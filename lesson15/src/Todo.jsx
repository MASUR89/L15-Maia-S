import React, { useState } from "react";
import Tasks from "./Tasks.jsx";
import List from "./List.jsx";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (task.trim() === "") return;
    if (todos.length >= 5) {
      alert("You can add only 5 tasks!");
      return;
    }
    setTodos([...todos, task]);
    setTask("");
  }

  function deleteTodo(todoToDelete) {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  }

  return (
    <div className="main">
      <h2>Type the task</h2>
      <Tasks task={task} setTask={setTask} onAdd={addTodo} />
      <List todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default Todo;