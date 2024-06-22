import { useState } from "react";
import ScheduleDate from "./ScheduleDate";
import People from "./People";
import Services from "./Services";

const MainLayout = () => {
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
  return <>Enter</>;
};

export default MainLayout;
