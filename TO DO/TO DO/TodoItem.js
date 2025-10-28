import React from "react";

function TodoItem({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>❌</button>
    </li>
  );
}

export default TodoItem;
