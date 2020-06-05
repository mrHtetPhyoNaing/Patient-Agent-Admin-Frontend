import React, { useState } from "react";
import getRegisterations from "../services/fakeRegisterations";
import TableDescription from "./tableDescription";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Pagination from "./pagination";

const Table = (props) => {
  const [data] = useState(getRegisterations());
  const [headers] = useState([
    "No",
    "Name",
    "NRC",
    "Visiting Date",
    "Phone",
    "Status",
    "",
  ]);

  return (
    <div className="container mx-auto px-5 sm:px-10 pb-5">
      <TableDescription
        description="Patient Registerations"
        count={data.length}
      />

      <div className="bg-white block w-full md:table">
        <TableHeader items={headers} />

        <TableBody items={data} />
      </div>

      <Pagination />
    </div>
  );
};

export default Table;
