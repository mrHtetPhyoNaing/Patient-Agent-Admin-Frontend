import React from "react";

const DropDown = (props) => {
  return (
    <select className="w-full sm:w-auto mb-3 sm:mb-0 px-3 py-3 pr-4 mr-3 bg-gray-200 text-gray-800 focus:shadow-none focus:border-blue-600 text-sm rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline">
      {props.items.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default DropDown;
