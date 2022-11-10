import React from "react";
import { Link } from "react-router-dom";

function ProductMain({ thumbnail, category, title, price, rating, stock, id }) {
  return (
    <div>
      <img src={thumbnail} />
      <div>
        <h3 className="text-gray-300">{category}</h3>
        <h2 className="text-blue-400">{title}</h2>
        <h2 className="text-red-400">Rs.{price}</h2>
        <span className="text-blue-500">{rating}</span>
        <h2 className="text-black">{stock}</h2>
        <Link to={"/products/" + id}>View Details</Link>
      </div>
    </div>
  );
}

export default ProductMain;
