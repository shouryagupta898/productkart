import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductPageApp from "./ProductPageApp";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div className="bg-yellow-200 h-screen overflow-scroll">
      <Navbar />

      <Routes>
        <Route index element={<ProductPageApp />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
