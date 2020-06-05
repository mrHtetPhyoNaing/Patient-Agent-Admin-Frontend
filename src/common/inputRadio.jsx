import React from "react";

const InputRadio = (props) => {
  const { classes, id, name, checked, label, value, changed } = props;

  return (
    <React.Fragment>
      <input
        className={classes}
        type="radio"
        id={id}
        name={name}
        defaultChecked={checked}
        value={value}
        onClick={changed}
      />
      <label htmlFor={id} className="ml-2 text-gray-800 text-xs md:text-sm">
        {label}
      </label>
    </React.Fragment>
  );
};

export default InputRadio;
