const Header2 = () => {
  return (
    <>
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 items-center space-y-5 md:space-y-0 lg:space-x-5 mx-3 mt-3">
        <div className="">
          <p className="border-2 border-black border-solid rounded-md py-3 px-3">
            <span className="font-semibold">All Waitlist</span>
            <span className="text-gray-400"> 100</span>
          </p>
        </div>
        <div className="">
          <p className="border-2 border-gray-500 border-solid rounded-md py-3 px-3">
            <span className="font-semibold">Newly Added</span>
            <span className="text-gray-400"> 50</span>
          </p>
        </div>
        <div className="">
          <p className="border-2 border-gray-500 border-solid rounded-md py-3 px-3">
            <span className="font-semibold">Lead</span>
            <span className="text-gray-400"> 20</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header2;
