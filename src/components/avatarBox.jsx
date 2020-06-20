import React, { useState } from "react";
import Avatar from "./common/avatar";
import Popup from "./common/popup";

const popupItems = [
  {
    iconName: "person-outline",
    label: "Account",
    hoverBgColor: "indigo-100",
    hoverTextColor: "indigo-500",
    classes: "mt-12",
  },
  {
    iconName: "log-out-outline",
    label: "Logout",
    hoverBgColor: "red-100",
    hoverTextColor: "red-500",
  },
];

const AvatarBox = () => {
  const [popupVisibility, setPopupVisibility] = useState(false);

  return (
    <div className="w-10 h-10 mb-4">
      <Avatar onClick={() => setPopupVisibility(!popupVisibility)} />

      {popupVisibility && <Popup items={popupItems} />}
    </div>
  );
};

export default AvatarBox;
