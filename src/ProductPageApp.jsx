import React, { useEffect, useState } from "react";
import { getProductList } from "./Api";
import ProductPage from "./ProductPage";
import Loading from "./Loading";
import Button from "./Button";

function ProductPageApp() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      } else if (sort == "title") {
        sortBy = "title";
      }

      const promise = getProductList(sortBy, query, page, sortType);
      promise.then(function (products) {
        console.log(products);
        setProductList(products);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

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
      <div className="flex justify-center mt-4">
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
          <option value="title">Sort title</option>
          <option value="highToLow">Sort by price: high to low</option>
          <option value="lowToHigh">Sort by price: low to high</option>
        </select>
      </div>
      {/* <ProductPage products={data} /> */}
      {/* data.length is used because if there is not product of id=101 then show <div>Not Found</div> */}
      {productList.length > 0 && <ProductPage products={productList} />}
      {productList.length == 0 && (
        <div className="border border-black bg-red-400 text-white text-4xl h-96 w-96">
          No Items To Display
        </div>
      )}
      <Button onClick={() => setPage(1)}>1</Button>
      <Button onClick={() => setPage(2)}>2</Button>
      <Button onClick={() => setPage(3)}>3</Button>
      <Button onClick={() => setPage(4)}>4</Button>
      <Button onClick={() => setPage(5)}>5</Button>
    </div>
  );
}

export default ProductPageApp;
