import React, { useState } from "react";
import Button from "./common/button";
import FilterOptions from "./filterOptions";

const Filter = () => {
  const [filterOptionsVisibility, setFilterOptionsVisibility] = useState(false);
  const [selections, setSelection] = useState({
    primary: { all: true },
    duration: { all: true },
    sort: { lastRegistered: true },
  });

  const filterOptions = [
    {
      id: "mail-all",
      name: "primary",
      label: "All",
      value: "all",
      defaultChecked: selections.primary.all,
    },
    {
      id: "mail-to-send",
      name: "primary",
      label: "Send",
      value: "send",
      defaultChecked: selections.primary.send,
    },
    {
      id: "mail-sent",
      name: "primary",
      label: "Sent",
      value: "sent",
      defaultChecked: selections.primary.sent,
    },
    {
      id: "mail-to-retry",
      name: "primary",
      label: "Retry",
      value: "retry",
      defaultChecked: selections.primary.retry,
    },
    <hr />,
    {
      id: "duration-all",
      name: "duration",
      label: "All",
      value: "all",
      defaultChecked: selections.duration.all,
    },
    {
      id: "this-week",
      name: "duration",
      label: "This Week",
      value: "thisWeek",
      defaultChecked: selections.duration.thisWeek,
    },
    {
      id: "this-month",
      name: "duration",
      label: "This Month",
      value: "thisMonth",
      defaultChecked: selections.duration.thisMonth,
    },
    <hr />,
    {
      id: "date-asc",
      name: "sort",
      label: "Last Registered",
      value: "lastRegistered",
      defaultChecked: selections.sort.lastRegistered,
    },
    {
      id: "date-desc",
      name: "sort",
      label: "First Registered",
      value: "firstRegistered",
      defaultChecked: selections.sort.firstRegistered,
    },
  ];

  function handleSelect(event) {
    const { name, value } = event.target;

    const radioSelections = { ...selections };
    radioSelections[name] = {};
    radioSelections[name][value] = true;

    setSelection(radioSelections);
    setFilterOptionsVisibility(false);
  }

  return (
    <div className="relative bg-white mt-3 sm:mt-0 rounded-lg px-4 py-5 shadow-sm sm:ml-3">
      <Button
        onClick={() => setFilterOptionsVisibility(!filterOptionsVisibility)}
        icon="filter-outline"
        label="Filter / Sort"
      />

      {filterOptionsVisibility && (
        <FilterOptions options={filterOptions} onChange={handleSelect} />
      )}
    </div>
  );
};

export default Filter;
