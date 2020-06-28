import React, { useState } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import Registerations from "../components/registerations";

import FilterContext from "../context/filterContext";

/*
  status   => all = 3, send = 0, sent = 1, retry = 2
  duration => all = 3, thisWeek = 0, thisMonth = 1
  sort     => lastRegister = 0, firstRegister = 1
*/
const Home = () => {
  const [filterOptionsVisibility, setFilterOptionsVisibility] = useState(false);
  const [selections, setSelection] = useState({
    status: 3,
    duration: 3,
    sort: 0,
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
      value: "all",
      defaultChecked: selections.duration === 3,
    },
    {
      id: "this-week",
      name: "duration",
      label: "This Week",
      value: "thisWeek",
      defaultChecked: selections.duration === 0,
    },
    {
      id: "this-month",
      name: "duration",
      label: "This Month",
      value: "thisMonth",
      defaultChecked: selections.duration === 1,
    },
    <hr />,
    {
      id: "date-asc",
      name: "sort",
      label: "Last Registered",
      value: "lastRegistered",
      defaultChecked: selections.sort === 0,
    },
    {
      id: "date-desc",
      name: "sort",
      label: "First Registered",
      value: "firstRegistered",
      defaultChecked: selections.sort === 1,
    },
  ];

  function handleSelect(event) {
    const { name, value } = event.target;

    const radioSelections = { ...selections };
    radioSelections[name] = parseInt(value);

    setSelection(radioSelections);
    setFilterOptionsVisibility(false);
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
        <SearchBar />
        <Registerations />
      </FilterContext.Provider>
    </div>
  );
};

export default Home;
