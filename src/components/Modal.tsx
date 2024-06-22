import { columnAtom, modalClick } from "@/utils/atom";
import { Checkbox } from "@nextui-org/react";
import { useAtom } from "jotai";

export type ObjProps = {
  key: string;
  label: string;
};

interface ModalProps {
  visibleColumns: string[];
  setVisibleColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

const Modal: React.FC<ModalProps> = ({ visibleColumns, setVisibleColumns }) => {
  const [ismodalClicked, setModalaClicked] = useAtom(modalClick);
  // const [isVisible, setVisible] = useAtom(columnAtom);

  const handleCheckboxChange = (key: string) => {
    setVisibleColumns((prev: string[]) =>
      prev.includes(key)
        ? prev.filter((colKey) => colKey !== key)
        : [...prev, key]
    );
  };

  const columns: ObjProps[] = [
    { key: "Created", label: "Created" },
    { key: "Name", label: "Name" },
    { key: "Status", label: "Status" },
    { key: "Email", label: "Email" },
    { key: "Phone", label: "Phone" },
    { key: "Service", label: "Service" },
    { key: "Scheduled", label: "Scheduled" },
  ];

  return (
    <div
      className={`absolute z-40 bg-slate-100 shadow-md top-[30rem] right-28 lg:top-48 lg:right-40 px-5 lg:space-y-3 rounded-lg lg:w-80 py-3 select-none ${
        ismodalClicked ? "block" : "hidden"
      }`}>
      <div className="pt-3 pb-4">
        <p className="font-semibold">Edit Columns</p>
        <p>Select columns to rearrange</p>
      </div>
      <div className="grid grid-col-1 space-y-3">
        {columns.map((column) => (
          <Checkbox
            key={column.key}
            isSelected={visibleColumns.includes(column.key)}
            onChange={() => handleCheckboxChange(column.key)}>
            <p className="border-1 border-gray-400 rounded-md lg:w-56 px-2">
              {column.label}
            </p>
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export default Modal;
