import React from "react";
import { useState } from "react";

const withToolTip = (Component) => {
  return function WithToolTip(props) {
    const [showToolTip, setShowToolTip] = useState(false);

    return (
      <div
        onMouseOver={() => setShowToolTip(true)}
        onMouseOut={() => setShowToolTip(false)}
      >
        <Component {...props} showToolTip={showToolTip} />
      </div>
    );
  };
};

export default withToolTip;
