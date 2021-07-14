import React from 'react';

const Popup = ({ items }) => {
  return (
    <div className="absolute right-0 bg-white p-2 mt-1 rounded-lg shadow-md border z-10">
      {items.map((item) => (
        <div
          key={item.label}
          onClick={item.onClick}
          className={`py-1 px-3 cursor-pointer w-32 text-gray-800 rounded-lg 
          hover:bg-${item.hoverBgColor}
          hover:text-${item.hoverTextColor}`}
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
