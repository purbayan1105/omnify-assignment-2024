import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { GoDotFill } from "react-icons/go";
import { useAtom } from "jotai";
import { columnAtom } from "@/utils/atom";
import Modal, { ObjProps } from "./Modal";

export type ColumnProps = {
  key: string;
  label: string;
};

export const rows = [
  {
    key: 1,
    Created: "Sun, 07 Jan 2024 2:42 PM",
    Name: "Theodore T.C. Calvin",
    Status: "Lead",
    Email: "theodore@gmail.com",
    Phone: "+91 +966559186876",
    Service: "Private Language Session",
    Scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    key: 2,
    Created: "06 Jan 2024 2:42 PM",
    Name: "Hannibal Smitha",
    Status: "Active",
    Email: "hannibalsmith@gmail.com",
    Phone: "+966578632254",
    Service: "Swim beginner for class new Ses...",
    Scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    key: 3,
    Created: "05 Jan 2024 2:42 PM",
    Name: "April Curtis",
    Status: "Inactive",
    Email: "aprilcurtis@gmail.com",
    Phone: "+91 +966558441503",
    Service: "Fitness Session",
    Scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    key: 4,
    Created: "04 Jan 2024 2:42 PM",
    Name: "Michael Knighta",
    Status: "Active",
    Email: "smith@gmail.com",
    Phone: "+966536605363",
    Service: "Arobics Session",
    Scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    key: 5,
    Created: "03 Jan 2024 2:42 PM",
    Name: "Templeton Peck",
    Status: "Active",
    Email: "michaelknight@gmail.com",
    Phone: "+91 +966503534287",
    Service: "Boxing Session",
    Scheduled: "05 Jan 2024 2:42 PM",
  },
  {
    key: 6,
    Created: "02 Jan 2024 2:42 PM",
    Name: "Theodore T.C. Calvin",
    Status: "Active",
    Email: "hannibalsmith@gmail.com",
    Phone: "+91 +966530269650",
    Service: "Kids play Session",
    Scheduled: "Thu, 04 Jan 2024 2:42 PM",
  },
  {
    key: 7,
    Created: "01 Jan 2024 2:42 PM",
    Name: "Michael Knight",
    Status: "Lead",
    Email: "Mikeh@gmail.com",
    Phone: "+91 +966566182220",
    Service: "Appointment Session",
    Scheduled: "Sat, 06 Jan 2024 2:42 PM",
  },
  {
    key: 8,
    Created: "30 Dec 2023 2:42 PM",
    Name: "Mike Torello",
    Status: "Lead",
    Email: "hannibalsmith@gmail.com",
    Phone: "+966544628109",
    Service: "Exercise Session",
    Scheduled: "Sat, 29 Dec 2023 2:42 PM",
  },
  {
    key: 9,
    Created: "29 Dec 2023 2:42 PM",
    Name: "Templeton Peck",
    Status: "Lead",
    Email: "templeto@gmail.com",
    Phone: "+91 +966594805058",
    Service: "Session Session",
    Scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
  {
    key: 10,
    Created: "28 Dec 2023 2:42 PM",
    Name: "Peter Thornton",
    Status: "Inactive",
    Email: "peterthornton@gmail.com",
    Phone: "+91 +966558441497",
    Service: "Boxing Session",
    Scheduled: "Wed, 03 Jan 2024 2:42 PM",
  },
  {
    key: 11,
    Created: "26 Dec 2023 2:42 PM",
    Name: "Lynn Tanner",
    Status: "Inactive",
    Email: "Lynn@gmail.com",
    Phone: "+91 +966506424822",
    Service: "Fitness Session",
    Scheduled: "Mon, 27 Dec 2023 2:42 PM",
  },
  {
    key: 12,
    Created: "25 Dec 2023 2:42 PM",
    Name: "Col. Roderick Decker",
    Status: "Lead",
    Email: "decker@gmail.com",
    Phone: "+91 +966558441493",
    Service: "Kids play Session",
    Scheduled: "Sun, 07 Jan 2024 2:42 PM",
  },
];

const columns = [
  {
    key: "Created",
    label: "Created",
  },
  {
    key: "Name",
    label: "Name",
  },
  {
    key: "Status",
    label: "Status",
  },
  {
    key: "Email",
    label: "Email",
  },
  {
    key: "Phone",
    label: "Phone",
  },
  {
    key: "Service",
    label: "Service",
  },
  {
    key: "Scheduled",
    label: "Secheduled",
  },
];

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["2"]));
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((column) => column.key)
  );

  return (
    <>
      <Table
        aria-label="Controlled table example with dynamic content"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="h-screen lg:h-[60dvh] mt-5 shadow-gray-400 scrollbar-thin scrollbar-track-gray-200 text-md">
        <TableHeader
          columns={columns.filter((col) => visibleColumns.includes(col.key))}>
          {(column) => (
            <TableColumn key={column.key} className="text-md text-left px-14">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key} className={`border-b-1`}>
              {(columnKey) => (
                <TableCell className="px-8 ">
                  <div
                    className={`flex justify-center items-center text-left ${
                      columnKey === "Status" &&
                      item.Status === "Lead" &&
                      `bg-blue-100 text-blue-400 rounded-full w-fit px-3 py-1`
                    } ${
                      columnKey === "Status" &&
                      item.Status === "Active" &&
                      `bg-green-100 text-green-400 rounded-full w-fit px-3 py-1`
                    } ${
                      columnKey === "Status" &&
                      item.Status === "Inactive" &&
                      `bg-gray-300  rounded-full w-fit px-3 py-1`
                    }`}>
                    <GoDotFill
                      className={`${
                        columnKey === "Status" ? `block` : `hidden`
                      }`}
                    />

                    <p> {getKeyValue(item, columnKey)} </p>
                  </div>
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
      />
    </>
  );
}
