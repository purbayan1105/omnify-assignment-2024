import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Modal from "./Modal";
import Table2 from "./Table2";
import Modal2 from "./Modal2";
import Filter from "./Filter";
import { filterAtom } from "@/utils/atom";
import { useAtom } from "jotai";

const Body = () => {
  const [isFilter, setFilter] = useAtom(filterAtom);
  return (
    <>
      <div className="lg:h-[95dvh] bg-white lg:mx-2 lg:my-2 px-2 py-2 rounded-lg">
        <Header />
        <Header2 />
        <Header3 />
        {isFilter && <Filter />}

        <Table2 />
        <Modal2 />
        <Footer />
      </div>
    </>
  );
};

export default Body;
