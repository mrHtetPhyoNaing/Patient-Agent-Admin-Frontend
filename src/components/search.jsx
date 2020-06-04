import React, { useState } from "react";
import DropDown from "../common/dropdown";
import InputText from "../common/inputText";
import Button from "../common/button";

const Search = () => {
  const [searchItems] = useState(["Name", "NRC", "Phone"]);

  return (
    <div className="bg-white px-4 rounded-lg py-5 shadow-sm">
      <div className="sm:mb-0">
        <DropDown items={searchItems} />

        <InputText
          properties={{
            type: "text",
            name: "search",
            placeholder: "Search...",
          }}
        />

        <Button
          properties={{
            icon: "search-outline",
            label: "Search",
          }}
        />
      </div>
    </div>
  );
};

export default Search;
