import React from "react";
import Search from "./search";
import Filter from "./filter";

const SearchBar = ({
  searchKey,
  searchValue,
  setSearchKey,
  setSearchValue,
  handleSearchOnChange,
}) => {
  return (
    <div className="container mx-auto px-5 sm:px-10 transform -translate-y-3 sm:-translate-y-5">
      <div className="flex flex-col sm:flex-row">
        <Search
          searchKey={searchKey}
          searchValue={searchValue}
          setSearchKey={setSearchKey}
          setSearchValue={setSearchValue}
          handleSearchOnChange={handleSearchOnChange}
        />
        <Filter />
      </div>
    </div>
  );
};

export default SearchBar;
