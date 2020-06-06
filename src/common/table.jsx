import React from "react";
import TableDescription from "./tableDescription";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Pagination from "./pagination";

const Table = (props) => {
  const { description, itemCount, tableHeaders, items } = props;
  return (
    <React.Fragment>
      <TableDescription description={description} count={itemCount} />
      <div className="bg-white block w-full md:table">
        <TableHeader items={tableHeaders} />
        <TableBody items={items} />
      </div>
      <Pagination />
    </React.Fragment>
  );
};

export default Table;
