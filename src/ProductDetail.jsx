import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./Api";
import Loading from "./Loading";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import NotFoundPage from "./NotFoundPage";
function ProductDetail({ onAddToCart }) {
  const params = useParams();
  const id = +params.id;
  //   console.log("id is ", id);
  const [productData, setProductData] = useState();
  const [count, setCount] = useState(1);
  const [cartInfo, setCartInfo] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(
    function () {
      const promise = getProductData(id);
      promise
        .then(function (data) {
          //   console.log("data is", data);
          setProductData(data);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [id]
  );

  if (loading) {
    return <Loading />;
  }

  if (!productData) {
    return <NotFoundPage />;
  }

  function changeCount(event) {
    if (event.target.value < 1) {
      setCount(1);
    } else {
      setCount(+event.target.value);
    }
  }

  function changeCart() {
    setCartInfo(count);
    onAddToCart(id, count);
  }
  return (
    <div>
      <div className="text-2xl m-2">
        <Link to="/">
          <RiArrowGoBackFill />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-8 bg-white max-w-5xl h-80">
          <img
            className="p-2 w-96 h-80 aspect-square"
            src={productData.thumbnail}
          />
          <div className="flex flex-col items-center">
            <h2 className="text-gray-300">Brand: {productData.brand}</h2>
            <h1 className="text-cyan-500">Title: {productData.title}</h1>
            <h2 className="text-blue-700">Category: {productData.category}</h2>
            <h2>Description: {productData.description}</h2>
            <h3 className="text-red-500">Rating: {productData.rating}</h3>
            <h2>Stock: {productData.stock}</h2>
            <h1 className="text-blue-700">Rs.{productData.price}</h1>
            <input
              type="number"
              value={count}
              onChange={changeCount}
              className="border border-black rounded-md w-10"
            />
            <button
              className="border border-black bg-red-300 rounded-md px-2 py-1 mt-2 "
              onClick={changeCart}
            >
              Add To Cart
            </button>
            <span className="block">{cartInfo} items added</span>
          </div>
        </div>
      </div>
      <div className="flex max-w-2xl justify-between ml-80 text-2xl mt-2 ">
        {id > 1 && (
          <Link to={"/products/" + (id - 1)}>
            <BsFillArrowLeftCircleFill />
          </Link>
        )}
        <span></span>
        <Link to={"/products/" + (id + 1)}>
          <BsFillArrowRightCircleFill />
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
