import React from "react";

const InputRadio = ({
  classes = "pl-5 inline-block cursor-pointer",
  id,
  name,
  defaultChecked,
  label,
  value,
  changed,
}) => {
  return (
    <>
      <input
        className={classes}
        type="radio"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        value={value}
        onClick={changed}
      />
      <label htmlFor={id} className="ml-2 text-gray-800 text-xs md:text-sm">
        {label}
      </label>
    </>
  );
};

export default InputRadio;
