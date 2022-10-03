import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductAddButton from "./ProductAddButton";
import ProductCard from "./ProductCard";
import axios from "./axios";

function Product() {
  const location = useLocation();
  const { categoryId } = location.state;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/${categoryId}/getproducts`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div className="text-sm sm:text-base">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center py-3">
        <h1 className="text-white text-xl">Products</h1>
        <Link
          to={`/${categoryId}/addproduct`}
          state={{ categoryId: categoryId }}
        >
          <ProductAddButton />
        </Link>
      </div>
      <div className="flex flex-col">
        <table className="w-11/12 max-w-7xl mx-auto">
          <tbody>
            <tr className="text-textGray">
              <th className="py-5">ID</th>
              <th className="py-5">Name</th>
              <th className="py-5">Unit Price</th>
              <th className="py-5">Quantity</th>
              <th className="py-5">View</th>
            </tr>

            {products.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  indexForColor={index}
                  productId={item.productNumber}
                  name={item.productName}
                  productAbout={item.productAbout}
                  price={item.unitPrice}
                  quantity={item.quantity}
                  categoryId={categoryId}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
