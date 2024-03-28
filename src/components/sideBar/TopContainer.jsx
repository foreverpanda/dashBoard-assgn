// TopContainer.jsx
import React from "react";
import { FiHexagon } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { TfiDropbox } from "react-icons/tfi";
import { PiUserSquareBold } from "react-icons/pi";
import { BiWallet } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";
import Tile from "../Tile";

function TopContainer() {
  const TILE_ITEMS = [
    {
      icon: <RxDashboard />,
      title: "Dashboard",
    },
    {
      icon: <TfiDropbox />,
      title: "Products",
      expand:true
    },
    {
      icon: <PiUserSquareBold />,
      title: "Customers",
      expand:true
    },
    {
      icon: <BiWallet />,
      title: "Income",
      expand:true
    },
    {
      icon: <CiDiscount1 />,
      title: "Promote",
      expand:true
    },
    {
      icon: <MdOutlineLiveHelp />,
      title: "Help",
      expand:true
    },
  ];

  return (
    <div>
      <span className="flex gap-2 pt-5 pl-2 items-center text-white font-sans font-bold text-3xl mb-10">
        <FiHexagon />
        Dashboard
      </span>

      {TILE_ITEMS.map((item, key) => (
        <Tile key={key} data={item} />
      ))}
    </div>
  );
}

export default TopContainer;