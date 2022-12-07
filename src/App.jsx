import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import ProductPageApp from "./ProductPageApp";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import NotFoundPage from "./NotFoundPage";
import CartPage from "./CartPage";
import Test from "./Test";
import EasyLoginPageWithFormik from "./LoginPageWithFormik";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  console.log("loggedin user is", user);
  const token = localStorage.getItem("token");
  console.log("token from localStorage", token);
  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <Navbar productCount={totalCount} />

      <div className="bg-white p-4 mt-10 max-w-6xl mx-auto">
        <Routes>
          <Route index element={<ProductPageApp user={user} />} />
          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={changeAddToCart} />}
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/CartPage"
            element={<CartPage cart={totalCartItem} updateCart={updateCart} />}
          />
          <Route path="/test" element={<Test setUser={setUser} />} />
          <Route
            path="/login"
            element={<EasyLoginPageWithFormik user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
