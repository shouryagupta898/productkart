import React, { useEffect, useState } from "react";
import Button from "./Button";
import CartRow from "./CartRow";

function CartList({ listProduct, cart, updateCart }) {
  const [localCart, setLocalCart] = useState(cart);
  console.log("local cart is ", localCart);

  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );

  function handleQuantityChange(changedId, newValue) {
    // const newValue = +event.target.value;
    // const changedId = event.target.getAttribute("key");
    // console.log("handleChange", newValue, changedId);

    const newLocalCart = { ...localCart, [changedId]: newValue };
    console.log("newLocalCart is ", newLocalCart);
    setLocalCart(newLocalCart);
  }

  function handleUpdateCart() {
    updateCart(localCart);
  }

  function handleChange(RemoveId) {
    const newCart = { ...cart };
    delete newCart[RemoveId];
    updateCart(newCart);
  }

  return (
    <div className="max-w-5xl mx-auto bg-white h-screen overflow-scroll p-10">
      <div className="flex p-2 space-x-2 border border-black bg-gray-100">
        <span className="ml-20 pl-10 grow font-bold">Product</span>
        <span className="w-12 font-bold">Price</span>
        <span className="w-16 pl-2 font-bold">Quantity</span>
        <span className="w-20 pl-4 font-bold">Subtotal</span>
      </div>

      {listProduct.map(function (productItems) {
        return (
          <CartRow
            key={productItems.id}
            products={productItems}
            quantity={localCart[productItems.id]}
            onQuantityChange={handleQuantityChange}
            onRemove={handleChange}
          />
        );
      })}
      <div className="flex justify-end border border-black px-2 py-1 ">
        <Button onClick={handleUpdateCart}>Update Cart</Button>
      </div>
    </div>
  );
}

export default CartList;
