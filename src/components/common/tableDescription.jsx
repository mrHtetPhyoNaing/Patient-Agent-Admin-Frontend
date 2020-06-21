import React from "react";

const TableDescription = ({ description, totalCount }) => {
  return (
    <div className="bg-white block flex px-6 py-3 justify-between rounded-tl-lg rounded-tr-lg">
      <span className="text-gray-600 text-sm">{description}</span>
      <span className="text-gray-600 text-sm">Total - {totalCount}</span>
    </div>
  );
};

export default TableDescription;
