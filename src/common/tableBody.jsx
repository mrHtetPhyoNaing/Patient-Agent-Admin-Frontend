import React, { useState, useEffect } from "react";
import Popup from "../common/popup";

const TableBody = (props) => {
  const { items: passedItems } = props;
  const [items, setItems] = useState(passedItems);
  useEffect(() => {
    setItems(passedItems);
  }, [passedItems]);

  const popupItems = [
    {
      iconName: "create-outline",
      label: "Edit",
      hoverBg: "bg-orange-100",
      hoverText: "text-orange-500",
    },
    {
      iconName: "trash-outline",
      label: "Delete",
      hoverBg: "bg-red-100",
      hoverText: "text-red-500",
    },
    {
      iconName: "document-text-outline",
      label: "View PDF",
      hoverBg: "bg-green-100",
      hoverText: "text-green-500",
    },
    {
      iconName: "trending-up-outline",
      label: "View More",
      hoverBg: "bg-ingido-100",
      hoverText: "text-indigo-500",
    },
  ];

  function renderElement(status) {
    if (status === 0) {
      return (
        <button title="Send mail">
          <ion-icon
            name="navigate-circle"
            class="align-middle text-indigo-400 bg-indigo-100 rounded-full"
            size="large"
          ></ion-icon>
        </button>
      );
    } else if (status === 1) {
      return (
        <ion-icon
          name="checkmark-done-circle"
          class="align-middle text-green-400 bg-green-100 rounded-full"
          size="large"
          title="Sent mail"
        ></ion-icon>
      );
    } else if (status === 2) {
      return (
        <button title="Retry sending mail">
          <ion-icon
            name="reload-circle"
            class="align-middle text-orange-400 bg-orange-100 rounded-full"
            size="large"
          ></ion-icon>
        </button>
      );
    }
  }

  function handleViewMore(registeration) {
    console.log("clicked");
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
    <React.Fragment>
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
              {item.popupVisibility ? <Popup items={popupItems} /> : null}
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
            {renderElement(item.status)}
          </div>

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
              {item.popupVisibility ? <Popup items={popupItems} /> : null}
              {/* view more */}
            </div>
            {/* end vertical dots */}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TableBody;
