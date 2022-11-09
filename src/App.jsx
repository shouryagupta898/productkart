import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductPageApp from "./ProductPageApp";

function App() {
  return (
    <div className="text-red-500 grid grid-cols-3 bg-yellow-300 ">
      <ProductPageApp />
      <ProductPageApp />
      <ProductPageApp />
      <ProductPageApp />
    </div>
  );
}

export default App;
