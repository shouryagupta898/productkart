import React from "react";
import { Link } from "react-router-dom";

function ProductMain({ thumbnail, category, title, price, rating, stock, id }) {
  return (
    <div className="ml-20">
      <Link to={"/products/" + id}>
        <img className="w-60 h-40 pt-4" src={thumbnail} />
      </Link>
      <div>
        <h3 className="text-cyan-500">Category: {category}</h3>
        <h2 className="text-blue-400">Title: {title}</h2>
        <h2 className="text-red-400">Rs.{price}</h2>
        <span className="text-blue-500">Rating: {rating}</span>
        <h2 className="text-green-400">Stock: {stock}</h2>
        <Link to={"/products/" + id}>View Details</Link>
      </div>
    </div>
  );
}

export default ProductMain;
