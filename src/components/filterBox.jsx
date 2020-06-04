import React from "react";
import InputRadio from "../common/inputRadio";

const FilterBox = (props) => {
  return (
    <div className="bg-white w-full rounded-lg shadow-md mt-3 md:absolute md:mt-8 right-0 border z-50">
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="mail-all"
          name="mail-filter"
          label="All"
          checked={true}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="mail-to-send"
          name="mail-filter"
          label="Send"
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="mail-sent"
          name="mail-filter"
          label="Sent"
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio id="mail-to-retry" name="mail-filter" label="Retry" />
      </div>
      <hr />
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="duration-all"
          name="filter"
          label="All"
          checked={true}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="this-week"
          name="filter"
          label="This Week"
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="this-month"
          name="filter"
          label="This Month"
        />
      </div>
      <hr />
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="date-asc"
          name="sort"
          label="Last Registered"
          checked={true}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="date-desc"
          name="sort"
          label="First Registered"
        />
      </div>
    </div>
  );
};

export default FilterBox;
