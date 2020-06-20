import React from "react";

const Button = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-full sm:w-auto bg-indigo-500 bottom-0 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    >
      {props.icon && (
        <ion-icon
          name={props.icon}
          class="align-text-top"
          size="small"
        ></ion-icon>
      )}
      &nbsp;
      {props.label}
    </button>
  );
};

export default Button;
