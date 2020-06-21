import React from "react";

const TableHeader = ({ items }) => {
  return (
    <div className="hidden md:table-row w-full">
      {items.map((item) => (
        <div
          key={item}
          className="block md:table-cell border-b px-6 py-3 text-sm font-semibold tracking-wider text-gray-700"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
