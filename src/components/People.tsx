import { useState } from "react";
import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { rows } from "./Table2";

type ObjProps = {
  key: number;
  Created: string;
  Name: string;
  Status: string;
  Email: string;
  Phone: string;
  Service: string;
  Scheduled: string;
};

const People = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredNames = rows.filter((row: ObjProps) =>
    row.Name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mt-3">
        <Input
          placeholder="Search Your Name"
          startContent={<FaSearch />}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {searchTerm && (
        <div className="mt-3 mx-2">
          {filteredNames.length > 0 ? (
            <ul>
              {filteredNames.map((row, index) => (
                <li key={index}>{row.Name}</li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default People;
