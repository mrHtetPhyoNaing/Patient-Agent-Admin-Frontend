import React, { useState } from "react";

const InputText = (props) => {
  const [properties] = useState(props.properties);

  return (
    <input
      className="w-full sm:w-auto mb-3 sm:mb-0 p-2 mr-3 border rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline"
      type="text"
      name={properties.name}
      placeholder={properties.placeholder}
    />
  );
};

export default InputText;
