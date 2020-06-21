import React, { useState, useEffect } from "react";
import Popup from "../common/popup";
import Icon from "./icon";

const TableBody = ({ items: passedItems, popupItems }) => {
  const [items, setItems] = useState(passedItems);

  useEffect(() => {
    setItems(passedItems);
  }, [passedItems]);

  function renderStatusIcon(status) {
    if (status === 0) {
      return (
        <Icon
          title="Send mail"
          name="navigate-circle"
          classes="text-indigo-400 bg-indigo-100"
        />
      );
    } else if (status === 1) {
      return (
        <Icon
          title="Successfully Sent"
          name="checkmark-done-circle"
          classes="text-green-400 bg-green-100"
        />
      );
    } else if (status === 2) {
      return (
        <Icon
          title="Retry sending mail"
          name="reload-circle"
          classes="text-orange-400 bg-orange-100"
        />
      );
    }
  }

  function handleViewMore(registeration) {
    const data = [...items];

    data.map((d) => {
      if (d.popupVisibility === true && d !== registeration)
        return delete d.popupVisibility;
      return d;
    });

    const index = data.indexOf(registeration);
    data[index] = { ...data[index] };
    data[index].popupVisibility = !data[index].popupVisibility;
    setItems(data);
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="block md:table-row md:static border-b py-3"
        >
          <div className="flex md:table-cell md:border-b px-6 py-1 md:py-3 text-sm text-gray-700 items-center">
            <span className="flex-auto text-indigo-500">#{item.id}</span>
            {/* phone:view more */}
            <div className="md:hidden py-1 text-sm text-gray-700 relative">
              <button
                onClick={() => handleViewMore(item)}
                className="inline-flex w-6 h-6 items-center justify-center cursor-pointer hover:bg-indigo-100 rounded-full"
              >
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
              </button>
              {item.popupVisibility && <Popup items={popupItems} />}
            </div>
            {/* end phone:view more */}
          </div>
          <div className="block md:table-cell md:border-b px-6 py-1 md:py-3 text-sm text-gray-700">
            {item.name}
          </div>
          <div className="block md:table-cell md:border-b px-6 py-1 md:py-3 text-sm text-gray-700">
            {`${item.nrcState}\\${item.nrcTownship} (${item.nrcType}) ${item.nrcNumber}`}
          </div>
          <div className="block md:table-cell md:border-b px-6 py-1 md:py-3 text-sm text-gray-700">
            {item.visitingDate}
          </div>
          <div className="block md:table-cell md:border-b px-6 py-1 md:py-3 text-sm text-gray-700">
            {item.contactPersonPhone}
          </div>
          <div className="hidden block md:table-cell md:border-b px-6 py-1 md:py-3 text-sm text-gray-700">
            {renderStatusIcon(item.status)}
          </div>
          {/* laptop:view more */}

          <div className="hidden block md:table-cell md:border-b px-6 py-1 md:py-3 text-sm text-gray-700">
            {/* vertical dots */}
            <div className="relative hidden md:inline-block">
              <button
                onClick={() => handleViewMore(item)}
                className="inline-flex w-8 h-8 items-center justify-center cursor-pointer hover:bg-indigo-100 rounded-full focus:outline-none focus:bg-indigo-100"
              >
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
              </button>

              {/* view more */}
              {item.popupVisibility && <Popup items={popupItems} />}
              {/* view more */}
            </div>
            {/* end vertical dots */}
          </div>

          {/* end laptop:view more */}
        </div>
      ))}
    </>
  );
};

export default TableBody;
