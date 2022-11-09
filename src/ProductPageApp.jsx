import React from "react";
import ProductMain from "./ProductMain";
// import { getProductList } from "./Api";

function ProductPageApp() {
  return (
    <div>
      <ProductMain
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlz-KHzq962AN0BsegZy7R0ZjH3WH4Fodfg&usqp=CAU"
        category="phone"
        title="iphone"
        price="$40"
      />
    </div>
  );
}

export default ProductPageApp;
