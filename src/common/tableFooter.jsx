import React from "react";
import Pagination from "./pagination";

const TableFooter = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  return (
    <div className="bg-white block flex px-6 py-4 justify-between rounded-bl-lg rounded-br-lg">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700 mb-2 md:mb-0">
            Showing
            <span className="font-medium"> 1 </span>
            to
            <span className="font-medium"> 10 </span>
            of
            <span className="font-medium"> 97 </span>
            results
          </p>
        </div>
        <Pagination
          itemsCount={itemsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default TableFooter;
