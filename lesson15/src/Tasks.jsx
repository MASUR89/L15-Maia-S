
function Tasks({ task, setTask, onAdd }) {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="addbtn" onClick={onAdd}>Add task</button>
    </div>
  );
}

export default Tasks