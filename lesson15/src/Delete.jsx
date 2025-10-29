
function Delete({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo)}
      > Remove
      </button>
    </li>
  );
}

export default Delete