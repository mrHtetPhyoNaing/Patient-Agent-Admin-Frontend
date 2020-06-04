import React from "react";

const Popup = (props) => {
  const { popUpElements } = props;

  return (
    <div className="right-0 mt-12 bg-white p-2 rounded-lg absolute z-50 shadow-md">
      {popUpElements.map((element) => (
        <div
          key={element.label}
          className={`py-1 px-3 cursor-pointer text-gray-800 
          hover:${element.hoverBg} 
          hover:${element.hoverText} rounded-lg`}
        >
          <ion-icon
            name={element.iconName}
            size="small"
            class="align-middle"
          ></ion-icon>
          <span className="px-3 align-middle text-xs">{element.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Popup;
