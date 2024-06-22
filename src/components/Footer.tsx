import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="mt-3  mx-2 grid grid-cols-1 lg:grid-cols-2 space-y-4">
        <div className="flex items-center gap-3">
          <div className="">Displaying</div>
          <div className="flex items-center gap-1 bg-slate-200 px-4 py-1 rounded-lg">
            <div className="">15</div>
            <div className="gap-1">
              <MdKeyboardArrowUp />
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="">
            Out Of <span className="font-semibold">104</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <MdKeyboardArrowLeft />
          <div className="">Previous</div>
          <span>1</span>
          <span className="border-1 border-solid border-black px-3 py-1 rounded-md">
            2
          </span>
          <span>3</span>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </>
  );
};

export default Footer;
