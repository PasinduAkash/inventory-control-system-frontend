import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "./axios";

function EditProduct() {
  const location = useLocation();
  const { productId, name, productAbout, price, quantity, categoryId } =
    location.state;

  const navigate = useNavigate();

  const [editContent, setEditContent] = useState({
    productName: name,
    productAbout: productAbout,
    unitPrice: price,
    quantity: quantity,
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setEditContent((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`/edit/${categoryId}/product`, {
        productNumber: productId,
        data: editContent,
      })
      .then((res) => {
        navigate(-2);
      })
      .catch((err) => console.log(err));

    setEditContent({
      productName: "",
      productAbout: "",
      unitPrice: "",
      quantity: "",
    });
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
          value={editContent.productName}
        ></input>
        <label className="py-1">Description</label>
        <textarea
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="productAbout"
          cols="30"
          rows="10"
          value={editContent.productAbout}
        ></textarea>
        <label className="py-1">Unit Price</label>
        <input
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="unitPrice"
          value={editContent.unitPrice}
        ></input>
        <label className="py-1">Quantity</label>
        <input
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="quantity"
          value={editContent.quantity}
        ></input>
        <button
          type="submit"
          className="bg-purple-500 text-white w-1/5 mx-auto mt-3 py-1 rounded hover:bg-purple-500/75"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
