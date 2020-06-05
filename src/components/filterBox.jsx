import React from "react";
import InputRadio from "../common/inputRadio";

const FilterBox = (props) => {
  const { selection, onChange } = props;

  return (
    <div className="bg-white w-full rounded-lg shadow-md mt-3 md:absolute md:mt-8 right-0 border z-50">
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        {/* primary radio group */}
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="mail-all"
          name="primary"
          label="All"
          value="all"
          checked={selection.primary.all || false}
          changed={onChange}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="mail-to-send"
          name="primary"
          label="Send"
          value="send"
          checked={selection.primary.send || false}
          changed={onChange}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="mail-sent"
          name="primary"
          label="Sent"
          value="sent"
          checked={selection.primary.sent || false}
          changed={onChange}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="mail-to-retry"
          name="primary"
          label="Retry"
          value="retry"
          checked={selection.primary.retry || false}
          changed={onChange}
        />
      </div>
      {/* end primary radio group */}
      <hr />
      {/* duration */}
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="duration-all"
          name="duration"
          label="All"
          value="all"
          checked={selection.duration.all || false}
          changed={onChange}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="this-week"
          name="duration"
          label="This Week"
          value="thisWeek"
          checked={selection.duration.thisWeek || false}
          changed={onChange}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="this-month"
          name="duration"
          label="This Month"
          value="thisMonth"
          checked={selection.duration.thisMonth || false}
          changed={onChange}
        />
      </div>
      {/* end duration */}
      <hr />
      {/* sort */}
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="date-asc"
          name="sort"
          label="Last Registered"
          value="lastRegistered"
          checked={selection.sort.lastRegistered || false}
          changed={onChange}
        />
      </div>
      <div className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700">
        <InputRadio
          classes="pl-5 inline-block cursor-pointer"
          id="date-desc"
          name="sort"
          label="First Registered"
          value="firstRegistered"
          checked={selection.sort.firstRegistered || false}
          changed={onChange}
        />
      </div>
      {/* end sort */}
    </div>
  );
};

export default FilterBox;
