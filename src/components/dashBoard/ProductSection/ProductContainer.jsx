import React from "react";
import ProductHeader from "./ProductHeader";
import ProductDetails from "./ProductDetails";

function ProductContainer() {
  return <div className="bg-white rounded-xl m-5 p-5">

    <ProductHeader/>
<ProductDetails/>

  </div>;
}

export default ProductContainer;
