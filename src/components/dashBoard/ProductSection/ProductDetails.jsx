import React from "react";
import ProductTile from "./ProductTile";

const DUMMY_DATA = [
  {
    title: "Abstract Data",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    source:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: "32",
    price: "$45.99",
    days: "20",
  },
  {
    title:"Kurkure",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    source:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: "32",
    price: "$45.99",
    days: "20",
  },
];

function ProductDetails() {
  return (
    <div>
      <div className="flex justify-between mt-12 font-bold">
        <div className="text-gray-400">Product Name</div>
        <div className="flex mb-3 gap-20 text-gray-400 pr-14">
          <p>Stock</p>
          <p>Price</p>
          <p>Total Sales</p>
        </div>
      </div>

      <div className="w-[76vw] h-[2px] bg-gray-300 mb-10 mt-5"></div>
      {DUMMY_DATA.map((item) => (
        <ProductTile data={item} />
      ))}
    </div>
  );
}

export default ProductDetails;
