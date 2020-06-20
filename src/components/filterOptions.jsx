import React from "react";
import InputRadio from "./common/inputRadio";

const FilterOptions = ({ options, onChange }) => {
  return (
    <div className="bg-white w-full rounded-lg shadow-md mt-3 md:absolute md:mt-8 right-0 border z-50">
      {options.map((option, index) =>
        option.id ? (
          <div
            key={index}
            className="px-3 py-2 hover:bg-indigo-100 cursor-pointer hover:text-indigo-700"
          >
            <InputRadio
              id={option.id}
              name={option.name}
              label={option.label}
              value={option.value}
              defaultChecked={option.defaultChecked || false}
              changed={onChange}
            />
          </div>
        ) : (
          <React.Fragment key={index}>{option}</React.Fragment>
        )
      )}
    </div>
  );
};

export default FilterOptions;
