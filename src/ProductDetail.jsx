import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "./Api";

function ProductDetail() {
  const params = useParams();
  const id = +params.id;
  //   console.log("id is ", id);
  const [productData, setProductData] = useState();
  useEffect(
    function () {
      const promise = getProductData(id);
      promise.then(function (data) {});
      setProductData(data);
    },
    [id]
  );

  return (
    <div>
      <img src={productData.thumbnail} />
      <h2>{productData.brand}</h2>
      <h2>{productData.category}</h2>
      <h2>{productData.description}</h2>
    </div>
  );
}

export default ProductDetail;
