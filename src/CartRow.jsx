import React from "react";
import { CiCircleRemove } from "react-icons/ci";

function CartRow({ products, quantity, onQuantityChange, onRemove }) {
  console.log("quantity is ", quantity);
  function handleRowChange(event) {
    onQuantityChange(products.id, +event.target.value);
  }

  function handleCrossRemove() {
    onRemove(products.id);
  }

  return (
    <div className="flex p-2 space-x-3 items-center bg-white border border-blue-700 h-10">
      <button onClick={handleCrossRemove}>
        <CiCircleRemove />
      </button>
      <img className="w-10 h-10 p-2" src={products.thumbnail} />
      <h3 className="grow text-red-500 pl-6">{products.title}</h3>
      <h4 className="w-20">Rs.{products.price}</h4>
      <input
        className="w-8 rounded-md border border-black bg-gray-200 px-4 py-1"
        type="number"
        value={quantity}
        onChange={handleRowChange}
      />

      <h4 className="w-20 p-4">Rs.{products.price * quantity}</h4>
    </div>
  );
}

export default CartRow;
