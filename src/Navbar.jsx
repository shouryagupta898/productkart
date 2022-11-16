import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div className="bg-white p-2 ">
      <div className="bg-red-300 flex p-2 justify-between max-w-6xl mx-auto">
        <img
          className="w-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBO5L8GTZmyztR7pvTLU9thV5vWXzhqD1cqg&usqp=CAU"
        />
        <div className="flex flex-col items-center">
          <span className="border border-black rounded-2xl bg-blue-300 w-8 pl-1 -mb-1 ">
            {productCount}
          </span>
          <Link to="/CartPage">
            <BsCart4 className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
