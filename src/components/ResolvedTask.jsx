const ResolvedTask = ({ tasks }) => {
  return (
    <div>
      <h1>ResolvedTask</h1>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </div>
  );
};

export default ResolvedTask;
