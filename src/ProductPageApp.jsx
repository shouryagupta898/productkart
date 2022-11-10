// import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
// import ProductMain from "./ProductMain";
import { getProductList } from "./Api";
import ProductPage from "./ProductPage";

function ProductPageApp() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  useEffect(
    function () {
      const promise = getProductList(query);
      console.log("product aa gya", getProductList);
      promise.then(function (products) {
        console.log(products);
        setProductList(products);
      });
    },
    [query]
  );

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  function changeQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <div className="flex justify-center">
        <input
          value={query}
          onChange={changeQuery}
          className="border border-blue-700 m-2 p-2 rounded-md"
          placeholder="search"
        />
        <select className="border border-green-400 bg-cyan-300 m-2 p-2 rounded-md">
          <option>sort default</option>
          <option>sort by price:high to low</option>
          <option>set by price:low to high</option>
        </select>
      </div>
      <ProductPage products={data} />
    </div>
  );
}

export default ProductPageApp;
