import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  maxPaginateItem = 5,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  let pages;
  if (pagesCount < maxPaginateItem) pages = _.range(1, pagesCount + 1);
  else if (currentPage === 1 || currentPage === 2) pages = _.range(1, 6);
  else if (currentPage === pagesCount - 1)
    pages = _.range(pagesCount - 4, pagesCount + 1);
  else if (currentPage === pagesCount)
    pages = _.range(pagesCount - 5, pagesCount + 1);
  else pages = _.range(currentPage - 2, currentPage + 3);

  return (
    <nav className="relative z-0 inline-flex shadow-sm">
      <button
        type="button"
        className={`${
          currentPage === 1 ? `opacity-50 cursor-not-allowed` : ``
        } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150`}
        disabled={currentPage === 1 ? true : false}
        aria-label="Previous"
        onClick={() => onPageChange(1)}
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        First
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`${
            page === currentPage
              ? `bg-indigo-100 text-indigo-500`
              : `text-gray-500`
          } -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium hover:text-gray-500 focus:z-10 focus:outline-none focus:border focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className={`${
          currentPage === pagesCount ? `opacity-50 cursor-not-allowed` : ``
        } -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150`}
        aria-label="Next"
        disabled={currentPage === pagesCount ? true : false}
        onClick={() => onPageChange(pagesCount)}
      >
        Last
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
