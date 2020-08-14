import React from "react";

const DropDown = ({ items, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="w-full sm:w-auto mb-3 sm:mb-0 px-3 py-3 pr-4 mr-4 bg-gray-200 text-gray-800 focus:shadow-none focus:border-blue-600 text-sm rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline"
    >
      {items.map((item) => (
        <option
          key={item.value}
          defaultValue={item.defaultValue || ""}
          value={item.value}
        >
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
