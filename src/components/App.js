import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Categories from "./Categories";
import Product from "./Product";
import CategoryAddForm from "./CategoryAddForm";
import EditCategory from "./EditCategory";
import ProductAddForm from "./ProductAddForm";
import AboutProduct from "./AboutProduct";
import EditProduct from "./EditProduct";

function App() {
  const { id, productId } = useParams();

  return (
    <div className="bg-grayDark w-full h-full overflow-y-auto">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Categories />
            </div>
          }
        />

        <Route
          path={`/:${id}/products`}
          element={
            <div>
              <NavBar />
              <Product />
            </div>
          }
        />

        <Route path="/create/category" element={<CategoryAddForm />} />

        <Route path={`/edit/category/:${id}`} element={<EditCategory />} />

        <Route
          path={`/:${id}/products/:${productId}`}
          element={<AboutProduct />}
        />

        <Route path={`/:${id}/addproduct`} element={<ProductAddForm />} />

        <Route
          path={`/edit/category/:${id}/products/:${productId}`}
          element={<EditProduct />}
        />
      </Routes>
    </div>
  );
}

export default App;
