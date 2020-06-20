import React, { useState } from "react";
import Avatar from "./common/avatar";
import Popup from "./common/popup";

const AvatarBox = (props) => {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [popupItems] = useState([
    {
      iconName: "person-outline",
      label: "Account",
      hoverBg: "bg-indigo-100",
      hoverText: "text-indigo-500",
      classes: "mt-12",
    },
    {
      iconName: "log-out-outline",
      label: "Logout",
      hoverBg: "bg-red-100",
      hoverText: "text-red-500",
    },
  ]);

  return (
    <div className="w-10 h-10 mb-4">
      <Avatar onClick={() => setPopupVisibility(!popupVisibility)} />

      {popupVisibility ? <Popup items={popupItems} /> : null}
    </div>
  );
};

export default AvatarBox;
