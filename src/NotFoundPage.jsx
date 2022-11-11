import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center mt-24">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuggDwP7eF4G6Lp01Vh5cjbBTMCXJmR8wb0w&usqp=CAU" />
      <div className="flex flex-col items-center mt-2">
        <h1 className="text-2xl text-red-500">
          Page not found.Search something else
        </h1>
        <Link to="/">
          <button className="border border-black rounded-md bg-blue-300 px-2 py-1 mt-2">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
