import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductPageApp from "./ProductPageApp";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import NotFoundPage from "./NotFoundPage";

function App() {
  const [totalCartItem, setTotalCartItem] = useState({});
  console.log("totalCartItem is ", totalCartItem);
  function changeAddToCart(productId, count) {
    console.log("api me ", "productId:", productId, "count:", count);
    const oldCount = totalCartItem[productId] || 0;
    console.log(oldCount, productId);
    setTotalCartItem({ ...totalCartItem, [productId]: oldCount + count });
  }

  const totalCount = Object.keys(totalCartItem).reduce(function (
    previous,
    current
  ) {
    return previous + totalCartItem[current];
  },
  0);

  return (
    <div className="bg-yellow-200 h-screen overflow-scroll">
      <Navbar productCount={totalCount} />

      <Routes>
        <Route index element={<ProductPageApp />} />
        <Route
          path="/products/:id"
          element={<ProductDetail onAddToCart={changeAddToCart} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
