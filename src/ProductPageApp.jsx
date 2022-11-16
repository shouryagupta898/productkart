import React, { useEffect, useState } from "react";
import { getProductList } from "./Api";
import ProductPage from "./ProductPage";
import Loading from "./Loading";

function ProductPageApp() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    const promise = getProductList();
    // console.log("product aa gya", getProductList);
    promise.then(function (products) {
      console.log(products);
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "highToLow") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "lowToHigh") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  }

  function changeQuery(event) {
    setQuery(event.target.value);
  }

  function changeSort(event) {
    // console.log(event.target.value);
    setSort(event.target.value);
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
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
        <select
          onChange={changeSort}
          value={sort}
          className="border border-green-400 bg-cyan-300 m-2 p-2 rounded-md"
        >
          <option value="default">Sort default</option>
          <option value="highToLow">Sort by price: high to low</option>
          <option value="lowToHigh">Sort by price: low to high</option>
        </select>
      </div>
      {/* <ProductPage products={data} /> */}
      {/* data.length is used because if there is not product of id=101 then show <div>Not Found</div> */}
      {data.length > 0 && <ProductPage products={data} />}
      {data.length == 0 && <div>Not Found</div>}
    </div>
  );
}

export default ProductPageApp;
