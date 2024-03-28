import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Tile = ({ data }) => {
  return (
    <div className="flex items-center text-white hover:bg-lightblue-rgba rounded-md h-10 p-3 mb-3">
      {data.icon}
      <span className="ml-2">{data.title}</span>
      {data.expand && <IoIosArrowForward className="ml-auto" />}
    </div>
  );
};

export default Tile;
