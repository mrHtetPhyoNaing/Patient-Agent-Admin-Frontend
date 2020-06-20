import React, { useState } from "react";
import imgNoData from "../assets/nodata.svg";
import getRegisterations from "../services/fakeRegisterations";
import Table from "./common/table";

const Registerations = (props) => {
  let [data] = useState(getRegisterations());
  const [tableHeaders] = useState([
    "No",
    "Name",
    "NRC",
    "Visiting Date",
    "Phone",
    "Status",
    "",
  ]);

  if (data.length === 0)
    return (
      <div className="mx-auto container sm:px-10 px-5">
        <div className="flex items-center flex-col py-10">
          <img className="h-64" src={imgNoData} alt="No data" />
          <h4 class="font-bold tracking-wide text-lg text-orange-500 py-10">
            There are no registerations until now.
          </h4>
        </div>
      </div>
    );

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
