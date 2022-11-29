import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { getProductData, getProductsByIds } from "./Api";
import Loading from "./Loading";
import CartList from "./CartList";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      const productCartId = Object.keys(cart);
      // const cartProduct = productCartId.map(function (id) {
      //   return getProductData(id);
      // });

      // Promise.all(cartProduct).then(function (data) {
      //   setProduct(data);
      //   setLoading(false);
      // });
      getProductsByIds(productCartId).then(function (data) {
        setProduct(data);
        setLoading(false);
      });
    },
    [cart]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="text-2xl m-2">
        <Link to="/">
          <RiArrowGoBackFill />
        </Link>
      </div>
      <CartList listProduct={product} cart={cart} updateCart={updateCart} />
    </div>
  );
}
export default CartPage;
