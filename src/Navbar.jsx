import React from "react";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-white p-2 ">
      <div className="bg-red-300 flex p-2 justify-between max-w-6xl mx-auto">
        <img
          className="w-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBO5L8GTZmyztR7pvTLU9thV5vWXzhqD1cqg&usqp=CAU"
        />
        <BsCart4 className="text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
