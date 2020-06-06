import React, { useState } from "react";
import getRegisterations from "../services/fakeRegisterations";
import Table from "../common/table";

const Registerations = (props) => {
  const [data] = useState(getRegisterations());
  const [tableHeaders] = useState([
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
      <Table
        description="Patient Registerations"
        itemCount={data.length}
        tableHeaders={tableHeaders}
        items={data}
      />
    </div>
  );
};

export default Registerations;
