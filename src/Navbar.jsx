import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div>
      <div className="bg-red-300 flex px-16 py-4 justify-between ">
        <img
          className="w-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBO5L8GTZmyztR7pvTLU9thV5vWXzhqD1cqg&usqp=CAU"
        />
        <div className="flex flex-col items-center">
          <span className="border border-black bg-red-500 w-4  text-xs  -mb-2 ml-4 rounded-full ">
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
