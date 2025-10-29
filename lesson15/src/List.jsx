import Delete from "./Delete";

function List({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p>Please, add your tasks!</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <Delete key={index} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}


export default List