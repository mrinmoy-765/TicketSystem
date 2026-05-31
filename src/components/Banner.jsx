const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-linear-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl">
      <h1 className="text-2xl font-bold">Customer Support Zone</h1>

      <div className="flex gap-6 mt-4">
        <p>In Progress: {inProgressCount}</p>
        <p>Resolved: {resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
