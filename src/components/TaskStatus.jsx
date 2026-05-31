const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div>
      <h2 className="font-bold text-xl text-gray-600 mb-3">Task Status</h2>

      {tasks.map((task) => (
        <div key={task.id} className="mb-3 border-b pb-2">
          <p>{task.title}</p>

          <button
            onClick={() => onComplete(task)}
            className="bg-green-500 text-white px-2 py-1 mt-1 rounded"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
