import React, { useEffect, useState } from "react";
import { getProductList } from "./Api";
import ProductPage from "./ProductPage";
import Loading from "./Loading";
import { range } from "lodash";
import { Link, Navigate, useSearchParams } from "react-router-dom";

function ProductPageApp({ user }) {
  const [productData, setProductData] = useState({});
  // const [query, setQuery] = useState("");
  // const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { query, sort, page } = params;
  query = query || "";
  sort = sort || "default";
  page = +page || 1;

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
      promise.then(function (body) {
        console.log(body);
        setProductData(body);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function changeQuery(event) {
    setSearchParams({ ...params, query: event.target.value, page: 1 });
  }

  function changeSort(event) {
    // console.log(event.target.value);
    setSearchParams({ ...params, sort: event.target.value });
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
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
          <option value="title">Sort title</option>
          <option value="highToLow">Sort by price: high to low</option>
          <option value="lowToHigh">Sort by price: low to high</option>
        </select>
      </div>
      {/* <ProductPage products={data} /> */}
      {/* data.length is used because if there is not product of id=101 then show <div>Not Found</div> */}
      {productData.data.length > 0 && (
        <ProductPage products={productData.data} />
      )}
      {productData.data.length == 0 && (
        <div className="border border-black bg-red-400 text-white text-4xl h-96 w-96">
          No Items To Display
        </div>
      )}
      <div className="mt-4 bg-yellow-300 p-2">
        {/* {[...Array(productData.meta.last_page).keys()].map((item) => ( */}
        {range(1, productData.meta.last_page + 1).map((pageNumber) => (
          // <Button key={item} onClick={() => setPage(item)}>
          <Link
            key={pageNumber}
            to={"?" + new URLSearchParams({ ...params, page: pageNumber })}
            className={
              pageNumber === page
                ? "bg-red-500 px-2 py-1 m-1"
                : "bg-gray-300 px-2 py-1 m-1"
            }
          >
            {pageNumber}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPageApp;
