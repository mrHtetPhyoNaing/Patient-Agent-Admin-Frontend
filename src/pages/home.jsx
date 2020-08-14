import React, { useState } from "react";
import Header from "../components/header";
import Search from "../components/search";
import Filter from "../components/filter";
import Registerations from "../components/registerations";
import getRegisterations from "../services/fakeRegisterations";

import FilterContext from "../context/filterContext";

/*
  status   => all = 3, send = 0, sent = 1, retry = 2
  duration => all = 3, thisWeek = 0, thisMonth = 1
  sort     => lastRegister = 0, firstRegister = 1
*/
const Home = () => {
  const [registerations, setRegisterations] = useState(getRegisterations());

  const [searchKey, setSearchKey] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const [inputPlaceholder, setInputPlaceholder] = useState("Mg Ba");

  const [filterOptionsVisibility, setFilterOptionsVisibility] = useState(false);
  const [selections, setSelection] = useState({
    status: 3,
    duration: 3,
    sort: "desc",
  });

  const filterOptions = [
    {
      id: "mail-all",
      name: "status",
      label: "All",
      value: 3,
      defaultChecked: selections.status === 3,
    },
    {
      id: "mail-to-send",
      name: "status",
      label: "Send",
      value: 0,
      defaultChecked: selections.status === 0,
    },
    {
      id: "mail-sent",
      name: "status",
      label: "Sent",
      value: 1,
      defaultChecked: selections.status === 1,
    },
    {
      id: "mail-to-retry",
      name: "status",
      label: "Retry",
      value: 2,
      defaultChecked: selections.status === 2,
    },
    <hr />,
    {
      id: "duration-all",
      name: "duration",
      label: "All",
      value: 3,
      defaultChecked: selections.duration === 3,
    },
    {
      id: "last-week",
      name: "duration",
      label: "Last Week",
      value: 0,
      defaultChecked: selections.duration === 0,
    },
    {
      id: "last-month",
      name: "duration",
      label: "Last Month",
      value: 1,
      defaultChecked: selections.duration === 1,
    },
    <hr />,
    {
      id: "date-desc",
      name: "sort",
      label: "Last Registered",
      value: "desc",
      defaultChecked: selections.sort === "desc",
    },
    {
      id: "date-asc",
      name: "sort",
      label: "First Registered",
      value: "asc",
      defaultChecked: selections.sort === "asc",
    },
  ];

  function handleSelect(event) {
    const { name, value } = event.target;
    const radioSelections = { ...selections };
    radioSelections[name] = /^\d+$/.test(value) ? parseInt(value) : value;
    setSelection(radioSelections);
    setFilterOptionsVisibility(false);
  }

  function handleSearchOnChange(searchedValue) {
    setSearchValue(searchedValue);

    let results = getRegisterations();
    if (searchedValue && (searchKey === "name" || searchKey === "phone")) {
      results = results.filter((registeration) => {
        return registeration[searchKey]
          .toLowerCase()
          .startsWith(searchedValue.toLowerCase());
      });
    }

    return setRegisterations(results);
  }

  function handleDropdownChange(value) {
    let placeholder = "";
    const option = value;

    if (option === "name") placeholder = "Mg Ba";
    else if (option === "nrc") placeholder = "1/MaMaNa(N) 123456";
    else if (option === "phone") placeholder = "09123456789";

    setSearchKey(option);
    setSearchValue("");
    setRegisterations(getRegisterations());
    setInputPlaceholder(placeholder);
  }

  return (
    <div className="w-full">
      <Header />
      <FilterContext.Provider
        value={{
          options: filterOptions,
          visibility: filterOptionsVisibility,
          selectedOptions: selections,
          onFilterButtonClick: setFilterOptionsVisibility,
          onOptionSelect: handleSelect,
        }}
      >
        <div className="container mx-auto px-5 sm:px-10 transform -translate-y-3 sm:-translate-y-5">
          <div className="flex flex-col sm:flex-row">
            <Search
              searchKey={searchKey}
              searchValue={searchValue}
              inputPlaceholder={inputPlaceholder}
              setSearchKey={setSearchKey}
              setSearchValue={setSearchValue}
              handleSearchOnChange={handleSearchOnChange}
              handleDropdownChange={handleDropdownChange}
            />
            <Filter />
          </div>
        </div>
        <Registerations values={registerations} />
      </FilterContext.Provider>
    </div>
  );
};

export default Home;
