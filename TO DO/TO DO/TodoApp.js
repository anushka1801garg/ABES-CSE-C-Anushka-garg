import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="app-box">
      <h2>📝 To-Do List</h2>
      <div className="input-area">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <TodoItem key={index} text={item} onDelete={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
