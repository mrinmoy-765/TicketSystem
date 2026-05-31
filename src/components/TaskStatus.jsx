const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div>
      <h2 className="font-bold text-xl text-gray-600 mb-3">Task Status</h2>
      {tasks.length === 0 ? (
        <span>Select a ticket to add to Task Status</span>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="mb-3 bg-white rounded-sm py-3 px-2">
            <p className="text-lg font-semibold mb-2">{task.title}</p>
            <button
              onClick={() => onComplete(task)}
              className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 mt-1 rounded w-full"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
