const ResolvedTask = ({ tasks }) => {
  return (
    <div>
      <h1 className="font-bold text-xl text-gray-600 my-3">Resolved Task</h1>
      {tasks.length === 0 ? (
        <span>No resolved tasks yet.</span>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="mb-3 bg-gray-400 rounded-sm py-3 px-2">
            <p className="text-lg font-semibold ">{task.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedTask;
