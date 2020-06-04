import React from "react";

const Popup = (props) => {
  const { items } = props;

  return (
    <div className="right-0 mt-12 bg-white p-2 rounded-lg absolute z-50 shadow-md">
      {items.map((item) => (
        <div
          key={item.label}
          className={`py-1 px-3 cursor-pointer text-gray-800 
          hover:${item.hoverBg} 
          hover:${item.hoverText} rounded-lg`}
        >
          <ion-icon
            name={item.iconName}
            size="small"
            class="align-middle"
          ></ion-icon>
          <span className="px-3 align-middle text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Popup;
