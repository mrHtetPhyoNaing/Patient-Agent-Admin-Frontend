import React from "react";
import imgNoData from "../../assets/nodata.svg";

const NotFound = ({ title = "No Result Found", subTitle, emphasizeText }) => (
  <div className="mx-auto container sm:px-10 px-5">
    <div className="flex items-center flex-col py-10">
      <img className="h-64" src={imgNoData} alt="No data" />
      <h6 className="font-bold tracking-wide text-lg text-orange-500 text-center">
        {title}
      </h6>
      {subTitle}
      {emphasizeText && (
        <span className="bg-red-400 text-white px-2 py-1 rounded-lg">
          {emphasizeText}
        </span>
      )}
    </div>
  </div>
);

export default NotFound;
