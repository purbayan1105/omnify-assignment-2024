import { collapseAtom, toggleMenuAtom } from "@/utils/atom";
import { useAtom } from "jotai";
import { CiGlobe } from "react-icons/ci";
import { FaCalendarAlt, FaInbox } from "react-icons/fa";
import {
  FaArrowRightArrowLeft,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineDashboard,
  MdOutlineKeyboardArrowDown,
  MdOutlineLibraryAddCheck,
} from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { VscLayoutSidebarRight } from "react-icons/vsc";

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useAtom(collapseAtom);
  const [isToggle, setToggle] = useAtom(toggleMenuAtom);

  return (
    <div
      className={`fixed h-full ${
        isToggle ? "z-10 px-6" : "-z-30 lg:z-0"
      } lg:relative  ${
        isCollapsed
          ? "lg:col-span-1 flex flex-col items-center"
          : " lg:col-span-2"
      } col-span-1 inter bg-gray-100 px-3`}>
      <div className="flex justify-between items-center h-[10dvh] overflow-y-auto">
        <div className="flex items-center gap-1">
          <img
            src="/logo (2).png"
            alt="assignment-logo"
            className="w-11"
            onClick={() => setCollapsed(false)}
          />
          <div
            className={`${
              isCollapsed ? "hidden" : "flex"
            } items-center gap-1 text-[0.9rem] font-bold`}>
            <span>Front</span>
            <span>
              <GoDotFill />
            </span>
            <span>Desk</span>
          </div>
        </div>
        <div className={`${isCollapsed ? "hidden" : "block"}`}>
          <VscLayoutSidebarRight
            size={22}
            onClick={() => setCollapsed(!isCollapsed)}
          />
        </div>
      </div>

      {/* location, date, time */}
      <div className="h-[20dvh] mt-6">
        <div
          className={`bg-white px-2 py-1 rounded-md ${
            isCollapsed ? "w-fit py-3 px-5" : ""
          }`}>
          <div className={`flex justify-between items-center`}>
            <p className={`${isCollapsed ? "hidden" : "block"}`}>
              Location Name
            </p>
            <FaArrowRightArrowLeft />
          </div>
        </div>
        <div
          className={`mx-2 bg-slate-300 px-2 py-1 rounded-md ${
            isCollapsed ? "w-fit" : ""
          }`}>
          <div className={`${isCollapsed ? "hidden" : "flex gap-2"} text-sm`}>
            <span className="font-semibold">08:30</span>
            <span className="font-semibold"> Am</span>
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Tue, Jan 20
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CiGlobe />
              <p className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
                UTC: 5+ hours
              </p>
            </div>

            <MdOutlineKeyboardArrowDown
              className={`${isCollapsed ? "hidden" : "block"}`}
            />
          </div>
        </div>
      </div>

      {/* sidebar menu or navigation */}
      <div className="space-y-5 h-[40dvh]">
        <div className="flex items-center gap-2">
          <FaInbox size={22} />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>Orders</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineLibraryAddCheck size={22} />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>
            Subscriptions
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt size={22} />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>
            Calendar
          </span>
        </div>
        <div className="flex items-center gap-2">
          <PiClockCountdownBold size={22} />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>
            Waitlist
          </span>
        </div>
      </div>

      {/* dashboard, admin */}
      <div
        className={`flex ${
          isCollapsed ? "justify-center" : "justify-between"
        }  items-center gap-2`}>
        <div className="flex items-center gap-2">
          <MdOutlineDashboard
            size={22}
            className={`${isCollapsed ? "hidden" : "block"}`}
          />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>
            Dashboard
          </span>
        </div>
        <FaArrowUpRightFromSquare size={22} />
      </div>

      <div className="flex justify-center items-center mt-5 bg-white h-12 px-2 rounded-md">
        <div className="flex items-center gap-2">
          <img
            src="/avatar.jpg"
            alt="Admin Avatar"
            className="w-8 rounded-full"
          />
          <div className={`${isCollapsed ? "hidden" : "block"}`}>
            <div className="text-sm">Admin Name</div>
            <div className="text-sm text-gray-400">admin@gmail.com</div>
          </div>
        </div>
        <IoIosArrowDown
          size={22}
          className={`${isCollapsed ? "hidden" : "block"}`}
        />
      </div>

      {/* help center and copyright */}
      <div className="flex gap-2 items-center mt-8">
        <HiOutlineQuestionMarkCircle size={22} />
        <div className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
          <p>Help Center</p>
          <p className="text-gray-400">@2024, Omnify.inc</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
