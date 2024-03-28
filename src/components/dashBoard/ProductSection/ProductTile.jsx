import React from "react";

function ProductTile({data}) {
  return (
    <div className="flex justify-between flex-col mb-6 ">

    <div className="flex justify-between items-center">
    <div className="flex gap-10">
        <img className="w-24 h-[55px] rounded-xl" src={data.source}></img>
        <div className="flex flex-col">
          <p className="font-bold text-lg">{data.title}</p>
          <p className="text-gray-400 text-sm">{data.desc}</p>
        </div>
      </div>

      <div className="w-3/8 flex  gap-24 justify-center text-lg pr-10 ">
        <p>{data.stock} in stock</p>
        <p className="font-bold">{data.price}</p>
        <p>{data.days}</p>
      </div>
    </div>
    </div>
  );
}

export default ProductTile;
