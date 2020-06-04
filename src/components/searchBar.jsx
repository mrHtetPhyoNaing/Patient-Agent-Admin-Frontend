import React from "react";
import Search from "./search";
import Filter from "./filter";

const SearchBar = () => {
  return (
    <div className="container mx-auto px-5 sm:px-10 transform -translate-y-3 sm:-translate-y-5">
      {/* search & filter */}
      <div className="flex flex-col sm:flex-row">
        <Search />
        <Filter />
      </div>
      {/* end search & filter */}
    </div>
  );
};

export default SearchBar;
