import Body from "@/components/Body";
import HeaderPhone from "@/components/HeaderPhone";

import Sidebar from "@/components/Sidebar";
import { collapseAtom } from "@/utils/atom";
import { useAtom } from "jotai";

const index = () => {
  const [isCollapsed, setCollapsed] = useAtom(collapseAtom);
  return (
    <>
      <div className="h-auto lg:h-screen lg:grid grid-cols-12 bg-gray-100 overflow-hidden">
        <Sidebar />
        <div className={`${isCollapsed ? "col-span-11" : "col-span-10"}`}>
          <HeaderPhone />
          <Body />
        </div>
      </div>
    </>
  );
};

export default index;
