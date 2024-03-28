import React, { useState } from "react";
import Header from "./header/Header";
import { UserData } from "../../Data";
import InfoContainer from "./profileInfo/InfoContainer";
import MainChart from "./chart/MainChart";
import GraphData from "./chart/GraphData";
import ProductContainer from "./ProductSection/ProductContainer";

function Dashboard() {
  return (
    <div className="flex flex-col pl-[33vh] pr-10 w-screen right-0">
      <Header />

      <InfoContainer />

      <GraphData />
      <ProductContainer/>
    </div>
  );
}

export default Dashboard;
