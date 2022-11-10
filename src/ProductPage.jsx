import React from "react";
import ProductMain from "./ProductMain";

function ProductPage({ products }) {
  //   console.log(products);

  return (
    <div className="grid grid-cols-3">
      return
      {products.map(function (item) {
        return <ProductMain key={item.title} {...item} />;
      })}
    </div>
  );
}

export default ProductPage;
