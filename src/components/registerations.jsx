import React, { useState } from "react";
import getRegisterations from "../services/fakeRegisterations";
import NotFound from "./common/notFound";
import Table from "./common/table";

const popupItems = [
  {
    iconName: "create-outline",
    label: "Edit",
    hoverBgColor: "orange-100",
    hoverTextColor: "orange-500",
  },
  {
    iconName: "trash-outline",
    label: "Delete",
    hoverBgColor: "red-100",
    hoverTextColor: "red-500",
  },
  {
    iconName: "document-text-outline",
    label: "View PDF",
    hoverBgColor: "green-100",
    hoverTextColor: "green-500",
  },
  {
    iconName: "trending-up-outline",
    label: "View More",
    hoverBgColor: "ingido-100",
    hoverTextColor: "indigo-500",
  },
];

const Registerations = () => {
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

  if (data.length === 0)
    return <NotFound subTitle="There are no registerations til now." />;

  return (
    <div className="container mx-auto px-5 sm:px-10 pb-5">
      <Table
        description="Patient Registerations"
        itemTotalCount={data.length}
        tableHeaders={tableHeaders}
        items={data}
        popupItems={popupItems}
      />
    </div>
  );
};

export default Registerations;
