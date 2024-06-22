import { filterAtom, modalClick } from "@/utils/atom";
import { useAtom } from "jotai";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { RiBookReadLine } from "react-icons/ri";

const Header3 = () => {
  const [ismodalClicked, setModalaClicked] = useAtom(modalClick);
  const [isFilter, setFilter] = useAtom(filterAtom);

  return (
    <>
      <div className="grid grid-cols-1 space-y-3 md:grid-cols-6 mt-3 mx-5 items-center w-full overflow-x-hidden select-none">
        <div className="bg-gray-200 rounded-md px-3 py-2 w-fit h-fit col-span-3">
          <div
            className="flex items-center gap-2"
            onClick={() => setFilter(!isFilter)}>
            <div className="">
              <CiFilter />
            </div>
            <div className="">Add Filter</div>
          </div>
        </div>
        <div className="lg:flex items-center space-x-8">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm bg-slate-100">
            <div className="">
              <IoSearch />
            </div>
            <div className="">
              <input
                type="text"
                className="border-none outline-none bg-slate-100"
                placeholder="Search Client"
              />
            </div>
          </div>
          <div className="flex items-center gap-8 mt-6 lg:mt-0">
            <div className="">
              <FiRefreshCw size={20} />
            </div>
            <div className="" onClick={() => setModalaClicked(!ismodalClicked)}>
              <RiBookReadLine size={20} />
            </div>
            <div className="">
              <LuDownload size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header3;
