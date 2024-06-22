import { toggleMenuAtom } from "@/utils/atom";
import { useAtom } from "jotai";
import { GiCancel } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

const HeaderPhone = () => {
  const [isToggle, setToggle] = useAtom(toggleMenuAtom);
  return (
    <>
      <div className="flex items-center justify-between px-5 lg:hidden bg-slate-200 h-[10dvh]">
        <div className="flex justify-evenly text-xl font-bold items-center gap-8">
          <img src="/logo (2).png" alt="assignment-logo" className="w-11" />
          <div className="flex gap-3 items-center">
            <span>Front</span>
            <span>
              <GoDotFill />
            </span>
            <span>Desk</span>
          </div>
        </div>
        {isToggle ? (
          <GiCancel size={25} onClick={() => setToggle(!isToggle)} />
        ) : (
          <IoMenu size={25} onClick={() => setToggle(!isToggle)} />
        )}
      </div>
    </>
  );
};

export default HeaderPhone;
