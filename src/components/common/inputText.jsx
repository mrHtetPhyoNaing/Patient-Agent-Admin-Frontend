import React from "react";

const InputText = ({ name, placeholder }) => {
  return (
    <input
      className="w-full sm:w-auto mb-3 sm:mb-0 p-2 mr-4 border rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline"
      type="text"
      name={name}
      placeholder={placeholder}
    />
  );
};

export default InputText;
