import React, { useState } from "react";

const InputRadio = (props) => {
  const [properties] = useState(props.properties);

  return (
    <React.Fragment>
      <input
        className={properties.classes}
        type="radio"
        id={properties.id}
        name={properties.name}
        defaultChecked={properties.checked}
      />
      <label
        htmlFor={properties.id}
        className="ml-2 text-gray-800 text-xs md:text-sm"
      >
        {properties.label}
      </label>
    </React.Fragment>
  );
};

export default InputRadio;
