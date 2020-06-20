import React, { useState } from "react";
import DropDown from "./common/dropdown";
import InputText from "./common/inputText";
import Button from "./common/button";

const searchItems = [
  { name: "Name", defaultValue: true },
  { name: "NRC" },
  { name: "Phone" },
];

const Search = () => {
  const [inputPlaceholder, setInputPlaceholder] = useState("Mg Ba");

  function handleDropdownChange(event) {
    let placeholder = "";
    let option = event.target.value;

    if (option === "Name") placeholder = "Mg Ba";
    else if (option === "NRC") placeholder = "1/MaMaNa(N) 123456";
    else if (option === "Phone") placeholder = "09123456789";

    setInputPlaceholder(placeholder);
  }

  return (
    <div className="bg-white px-4 rounded-lg py-5 shadow-sm">
      <div className="sm:mb-0">
        <DropDown items={searchItems} onChange={handleDropdownChange} />

        <InputText name="search" placeholder={inputPlaceholder} />

        <Button icon="search-outline" label="Search" />
      </div>
    </div>
  );
};

export default Search;
