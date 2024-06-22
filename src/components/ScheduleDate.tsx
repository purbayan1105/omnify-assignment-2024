import { DatePicker, Select, SelectItem } from "@nextui-org/react";

const ScheduleDate = () => {
  const Filters = [
    { key: "all", label: "All" },
    { key: "custom", label: "Custom" },
    { key: "last_30_days", label: "Last 30 Days" },
    { key: "this_month", label: "This Month" },
    { key: "last_month", label: "Last Month" },
    { key: "this_quarter", label: "This Quarter" },
    { key: "two_quarters_ago", label: "Two Quarters Ago" },
  ];
  return (
    <>
      <div className="col-span-2 mt-3">
        <Select
          label="Select An Options"
          disabledKeys={[
            "All",
            "Custom",
            "Last 30 Days",
            "This Month",
            "Last Month",
            "This Quarter",
            "Two Quarters Ago",
          ]}
          className="w-[90%] mx-3">
          {Filters.map((filter) => (
            <SelectItem key={filter.key}>{filter.label}</SelectItem>
          ))}
        </Select>
        <div className="mt-5  ml-2 w-[70%]">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <div className="">
              <p>From</p>
              <DatePicker className="" isRequired />
            </div>
            <div className="">
              <p>To</p>
              <DatePicker className="" isRequired />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleDate;
