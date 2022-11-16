import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="border border-black bg-red-300 rounded-md px-2 py-1 mt-2 "
    ></button>
  );
}

export default Button;
