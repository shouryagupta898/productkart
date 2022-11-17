import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductPageApp from "./ProductPageApp";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import NotFoundPage from "./NotFoundPage";
import CartPage from "./CartPage";
import Test from "./Test";

function App() {
  const savedDataString = localStorage.getItem("savedCart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [totalCartItem, setTotalCartItem] = useState(savedData);
  // console.log("totalCartItem is ", totalCartItem);
  function changeAddToCart(productId, count) {
    console.log("api me ", "productId:", productId, "count:", count);
    const oldCount = totalCartItem[productId] || 0;
    // console.log(oldCount, productId);
    const newCart = { ...totalCartItem, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setTotalCartItem(newCart);
    const totalCartItemStringify = JSON.stringify(newCart);
    localStorage.setItem("savedCart", totalCartItemStringify);
  }

  const totalCount = Object.keys(totalCartItem).reduce(function (
    previous,
    current
  ) {
    return previous + totalCartItem[current];
  },
  0);

  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <Navbar productCount={totalCount} />

      <div className="bg-white p-4 mt-10 max-w-6xl mx-auto">
        <Routes>
          <Route index element={<ProductPageApp />} />
          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={changeAddToCart} />}
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/CartPage"
            element={<CartPage cart={totalCartItem} updateCart={updateCart} />}
          />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
