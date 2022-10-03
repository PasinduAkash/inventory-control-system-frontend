import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "./axios";

function ProductAddForm() {
  const location = useLocation();
  const { categoryId } = location.state;

  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    productName: "",
    productAbout: "",
    unitPrice: "",
    quantity: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`/${categoryId}/add/product`, {
        data: newProduct,
        id: generateProductId(),
      })
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => console.log(err));

    setNewProduct({
      productName: "",
      productAbout: "",
      unitPrice: "",
      quantity: "",
    });
  }

  function generateProductId() {
    const id = Math.floor(Math.random() * 10000);
    return id;
  }

  return (
    <div className="w-full h-full flex items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-11/12 max-w-lg mx-auto p-3 rounded-lg bg-grayLight border-purple-500 border-2 shadow-2xl text-textGray"
      >
        <label className="py-1">Product Name</label>
        <input
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="productName"
          value={newProduct.productName}
        ></input>
        <label className="py-1">Description</label>
        <textarea
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="productAbout"
          cols="30"
          rows="10"
          value={newProduct.productAbout}
        ></textarea>
        <label className="py-1">Unit Price (Please add numeric values)</label>
        <input
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="unitPrice"
          value={newProduct.unitPrice}
        ></input>
        <label className="py-1">Quantity (Please add numeric values)</label>
        <input
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="quantity"
          value={newProduct.quantity}
        ></input>
        <button
          type="submit"
          className="bg-purple-500 text-white w-1/5 mx-auto mt-3 py-1 rounded hover:bg-purple-500/75"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default ProductAddForm;
