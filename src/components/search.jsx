import React, { useState } from "react";
import DropDown from "./common/dropdown";
import InputText from "./common/inputText";

const searchItems = [
  { name: "Name", defaultValue: true },
  { name: "NRC" },
  { name: "Phone" },
];

const Search = ({
  searchKey,
  searchValue,
  setSearchKey,
  setSearchValue,
  handleSearchOnChange,
}) => {
  const [inputPlaceholder, setInputPlaceholder] = useState("Mg Ba");

  function handleDropdownChange(event) {
    let placeholder = "";
    let option = event.target.value;

    if (option === "Name") placeholder = "Mg Ba";
    else if (option === "NRC") placeholder = "1/MaMaNa(N) 123456";
    else if (option === "Phone") placeholder = "09123456789";

    setSearchKey(option);
    setInputPlaceholder(placeholder);
  }

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
