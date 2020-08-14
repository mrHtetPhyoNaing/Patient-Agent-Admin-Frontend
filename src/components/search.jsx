import React from "react";
import DropDown from "./common/dropdown";
import InputText from "./common/inputText";

const searchItems = [
  { name: "Name", value: "name", defaultValue: true },
  { name: "NRC", value: "nrc" },
  { name: "Phone", value: "phone" },
];

const Search = ({
  searchKey,
  searchValue,
  setSearchKey,
  setSearchValue,
  inputPlaceholder,
  handleSearchOnChange,
  handleDropdownChange,
}) => {
  return (
    <div className="bg-white px-4 rounded-lg py-5 shadow-sm">
      <div className="sm:mb-0">
        <DropDown items={searchItems} onChange={handleDropdownChange} />

        <InputText
          name="search"
          placeholder={inputPlaceholder}
          value={searchValue}
          onChange={handleSearchOnChange}
        />
      </div>
    </div>
  );
};

export default Search;
