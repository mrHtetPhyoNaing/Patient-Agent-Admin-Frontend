import React from "react";

const TableDescription = (props) => {
  const { description, count } = props;
  return (
    <div className="bg-white block flex px-6 py-3 justify-between rounded-tl-lg rounded-tr-lg">
      <span className="text-gray-600 text-sm">{description}</span>
      <span className="text-gray-600 text-sm">Total - {count}</span>
    </div>
  );
};

export default TableDescription;
