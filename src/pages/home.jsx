import React from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import Registerations from "../components/registerations";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <SearchBar />
      <Registerations />
    </div>
  );
};

export default Home;
