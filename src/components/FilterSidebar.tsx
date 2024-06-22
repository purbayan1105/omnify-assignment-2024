import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";

const FilterSidebar = ({ selectedComp, setSelectedComp }: any) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <>
      <div className="bg-slate-200 pt-5 space-y-5 px-2 border-r-1 border-solid border-slate-300  text-xs">
        <div
          className={`flex items-center gap-2 cursor-pointer  px-2 py-1 ${
            selectedComp === "scheduleDate" ? `bg-white rounded-md` : ""
          }`}
          onClick={() => {
            setSelectedComp("scheduleDate");
            // setClicked(true);
          }}>
          <FaCalendarAlt size={22} className="" />
          <p className="hidden lg:block">Scheduled Date</p>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer px-2 py-1 ${
            selectedComp === "people" ? `bg-white  rounded-md` : ""
          }`}
          onClick={() => {
            setSelectedComp("people");
            // setClicked(true);
          }}>
          <IoPeopleSharp size={22} />
          <p className="hidden lg:block">People</p>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer px-2 ${
            selectedComp === "services" ? `bg-white  rounded-md` : ""
          }`}
          onClick={() => {
            setSelectedComp("services");
            // setClicked(true);
          }}>
          <MdOutlineDashboard size={22} />
          <p className="hidden lg:block">Services / Products</p>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
