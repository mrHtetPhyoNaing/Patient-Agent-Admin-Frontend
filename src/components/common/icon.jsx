import React from "react";
import withToolTip from "../hoc/withToolTip";

const Icon = ({ name, classes, size = "large", ...props }) => {
  return (
    <>
      <ion-icon
        name={name}
        class={`align-middle rounded-full ${classes}`}
        size={size}
      ></ion-icon>
      {props.showToolTip && (
        <span className="absolute p-2 bg-gray-800 text-white z-50 shadow-md rounded-lg">
          {props.title}
        </span>
      )}
    </>
  );
};
export default withToolTip(Icon);
