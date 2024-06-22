import { useAtom } from "jotai";

import FilterSidebar from "./FilterSidebar";
import MainLayout from "./MainLayout";
import ScheduleDate from "./ScheduleDate";
import People from "./People";
import Services from "./Services";
import { useState } from "react";
import { Button } from "@nextui-org/react";

const Filter = () => {
  const [selectedComp, setSelectedComp] = useState("scheduleDate");

  const renderedContent = () => {
    switch (selectedComp) {
      case "scheduleDate":
        return <ScheduleDate />;
      case "people":
        return <People />;
      case "services":
        return <Services />;
      default:
        return <ScheduleDate />;
    }
  };
  return (
    <>
      <div className="absolute z-40    bottom-[1px] lg:bottom-64 w-[21rem] lg:w-[30rem] h-[300px] bg-slate-50 px-2 py-2 shadow-md rounded-lg">
        <div className=" grid grid-cols-3 border-b-1 border-solid border-slate-300 h-[80%]">
          <FilterSidebar
            selectedComp={selectedComp}
            setSelectedComp={setSelectedComp}
          />
          <div className="col-span-2">{renderedContent()}</div>
        </div>
        <div className="space-x-5 mt-2 flex justify-end">
          <Button className="text-sm rounded-md" color="default">
            Reset To Default
          </Button>
          <Button className="text-sm rounded-md bg-black text-white">
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filter;
