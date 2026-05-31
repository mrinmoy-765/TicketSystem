const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div>
      <div className="md:flex lg:flex lg:gap-2 md:gap-2 gap-2 mt-4 px-2">
        <div className="bg-linear-to-r from-[#6530E3] to-[#9f62f2]   text-white rounded-lg w-full md:p-20 lg:20 p-10">
          <p className="text-center text-3xl font-bold">
            In Progress: {inProgressCount}
          </p>
        </div>
        <div className="bg-linear-to-r from-[#54cf68] to-[#00827a]   text-white rounded-lg w-full md:p-20 lg:p-20 p-10">
          <p className="text-center text-3xl font-bold">
            Resolved: {resolvedCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
