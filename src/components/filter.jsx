import React, { useContext } from "react";
import Button from "./common/button";
import FilterOptions from "./filterOptions";
import FilterContext from "../context/filterContext";

const Filter = () => {
  const {
    options,
    visibility,
    onFilterButtonClick,
    onOptionSelect,
  } = useContext(FilterContext);

  return (
    <div className="relative bg-white mt-3 sm:mt-0 rounded-lg px-4 py-5 shadow-sm sm:ml-3">
      <Button
        onClick={() => onFilterButtonClick(!visibility)}
        icon="filter-outline"
        label="Filter / Sort"
      />
      {visibility && (
        <FilterOptions options={options} onChange={onOptionSelect} />
      )}
    </div>
  );
};

export default Filter;
