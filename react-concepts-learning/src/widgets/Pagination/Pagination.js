import { useEffect, useState } from "react";
import "./Pagination.css";
export default function Pagination() {
  const [productsData, setProductsData] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${
        (currentPage - 1) * pageSize
      }`
    );
    const data = await response.json();
    setProductsData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  const selectPageHandler = function (selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= productsData.total / pageSize &&
      selectedPage !== currentPage
    ) {
      setCurrentPage(selectedPage);
    }
  };
  return (
    <>
      <div className="productsContainer">
        {productsData && productsData.products.length > 0 ? (
          productsData.products.map((product) => {
            return (
              <div className="productsContainer_product" key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="productsContainer_product_image"
                />
                <p>{product.title}</p>
              </div>
            );
          })
        ) : (
          <h2>No Data found!!</h2>
        )}
      </div>
      <div className="pagination">
        <span
          onClick={() => selectPageHandler(currentPage - 1)}
          className={currentPage > 1 ? "" : "page_disabled"}
        >
          Prev
        </span>
        {productsData &&
          [...Array(Math.floor(productsData.total / pageSize))].map((_, i) => {
            return (
              <span
                className={currentPage === i + 1 ? "page_selected" : ""}
                key={i}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
        <span
          onClick={() => selectPageHandler(currentPage + 1)}
          className={
            currentPage < Math.floor(productsData.total / pageSize)
              ? ""
              : "page_disabled"
          }
        >
          Next
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(e.target.value);
          }}
        >
          {productsData &&
            [...Array(productsData.total / 10)].map((_, i) => (
              <option value={i * 10}>{i * 10}</option>
            ))}
        </select>
      </div>
    </>
  );
}
