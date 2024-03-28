import React from "react";
import InfoTile from "./InfoTile";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

import { CgNotes } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
const INFO = [
  {
    icon: <HiOutlineCurrencyDollar/>,
    title: "Earning",
    amount: "$198k",
    loss: false,
    performance: "31.8%",
    bgCol: "bg-green-200",
    fontCol : "text-green-700"

  },
  {
    icon: <CgNotes/>,
    title: "Orders",
    amount: "$2.4k",
    loss: true,
    performance: "2%",
    bgCol:"bg-purple-300",
    fontCol :"text-purple-700"
  },
  {
    icon: <IoWalletOutline/>,
    title: "Balance",
    amount: "$2.4k",
    loss: true,
    performance: "2%",
    bgCol:"bg-blue-300",
    fontCol :"text-blue-700"
  },
  {
    icon: <IoBagOutline/>,
    title: "Total Sales",
    amount: "$89k",
    loss: true,
    performance: "11%",
    bgCol:"bg-red-300",
    fontCol :"text-red-700",
  },
];

function InfoContainer() {
  return <div className="flex gap-12 p-5 ">
    {INFO.map((data,key)=>
    <InfoTile data={data}/>
    )}
  </div>;
}

export default InfoContainer;
