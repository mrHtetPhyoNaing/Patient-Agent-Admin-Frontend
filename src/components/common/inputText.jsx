import React from "react";

const InputText = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      className="w-full sm:w-auto mb-3 sm:mb-0 p-2 mr-4 border rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline"
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputText;
