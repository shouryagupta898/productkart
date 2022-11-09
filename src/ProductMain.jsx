import React from "react";

function ProductMain({ thumbnail, category, title, price }) {
  return (
    <div>
      <img src={thumbnail} />
      <h3>{category}</h3>
      <h2>{title}</h2>
      <h2>{price}</h2>
    </div>
  );
}

export default ProductMain;
