import React, { useState } from "react";
import Button from "../common/button";
import FilterBox from "./filterBox";

const Filter = () => {
  const [filterBoxVisibility, setFilterBoxVisibility] = useState(false);

  return (
    <div className="relative bg-white mt-3 sm:mt-0 rounded-lg px-4 py-5 shadow-sm sm:ml-3">
      <Button
        onClick={() => setFilterBoxVisibility(!filterBoxVisibility)}
        icon="filter-outline"
        label="Filter / Sort"
      />

      {filterBoxVisibility ? <FilterBox /> : null}
    </div>
  );
};

export default Filter;
