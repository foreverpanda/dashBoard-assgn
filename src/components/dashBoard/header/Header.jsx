import React from "react";
import SearchBar from "./SearchBar";
import MainChart from "../chart/MainChart";
import DoughnutChart from "../chart/DoughnutChart";

const Header = () => {
  return (
    <div className="p-10 flex   justify-between">
      <p className="text-xl font-medium">Hello Shahrukh 👋🏻,</p>
      <SearchBar />
    </div>
  );
};

export default Header;
