import _ from "lodash";
import React, { useState, useContext } from "react";
import TableDescription from "./tableDescription";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Pagination from "./pagination";
import { paginate } from "../../util/paginate";

import FilterContext from "../../context/filterContext";

const pageSize = 5;

const Table = ({
  description,
  itemTotalCount,
  tableHeaders,
  items,
  popupItems,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const { selectedOptions } = useContext(FilterContext);
  const status = selectedOptions.status;
  const duration = selectedOptions.duration;
  const sortOrder = selectedOptions.sort;

  const filteredItems =
    status !== 3 ? items.filter((item) => item.status === status) : items;

  const sortedItems = _.orderBy(filteredItems, ["createdAt"], [sortOrder]);

  const registerations = paginate(sortedItems, currentPage, pageSize);

  const totalItemsCount = filteredItems.length;
  const itemsCount = currentPage * pageSize;
  const firstItemCount = itemsCount - 4;
  const lastItemCount =
    totalItemsCount > itemsCount ? itemsCount : totalItemsCount;

  return (
    <React.Fragment>
      <TableDescription
        description={description}
        totalCount={totalItemsCount}
      />

      <div className="bg-white block w-full md:table">
        <TableHeader items={tableHeaders} />
        <TableBody items={registerations} popupItems={popupItems} />
      </div>

      {/* Footer & Pagination */}
      <div className="bg-white block flex px-6 py-4 justify-between rounded-bl-lg rounded-br-lg">
        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm leading-5 text-gray-700 mb-2 md:mb-0">
              Showing
              <span className="font-medium"> {firstItemCount} </span>
              to
              <span className="font-medium"> {lastItemCount} </span>
              of
              <span className="font-medium"> {totalItemsCount} </span>
              results
            </p>
          </div>
          <Pagination
            itemsCount={filteredItems.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      {/* end Footer & Pagination */}
    </React.Fragment>
  );
};

export default Table;
