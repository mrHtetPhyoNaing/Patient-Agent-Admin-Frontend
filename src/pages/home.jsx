import React from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import Table from "../common/table";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <SearchBar />
      <Table />
    </div>
  );
};

export default Home;
