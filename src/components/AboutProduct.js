import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "./axios";

function AboutProduct() {
  const location = useLocation();
  const { productId, name, productAbout, price, quantity, categoryId } =
    location.state;

  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/edit/category/${categoryId}/products/${productId}`, {
      state: location.state,
    });
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .post(`/delete/product`, { productId })
        .then((res) => {
          console.log(res.data);
          navigate(-1);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="flex items-center w-full h-full">
      <div className="w-11/12 max-w-4xl bg-grayLight mx-auto rounded-lg px-3 py-3 shadow-2xl">
        <h1 className="text-center text-purple-500 text-xl font-bold">
          {name}
        </h1>
        <p className="text-textGray">
          <span className="text-purple-500">Product Id: </span>
          {productId}
        </p>
        <h1 className="text-purple-500">Product Description</h1>
        <p className="text-textGray">{productAbout}</p>
        <p className="text-textGray">
          <span className="text-purple-500">Unit Price: </span>
          {price}
        </p>
        <p className="text-textGray">
          <span className="text-purple-500">Quantity: </span>
          {quantity}
        </p>
        <div className="text-center">
          <IconButton onClick={handleEdit} aria-label="edit">
            <EditIcon className="text-purple-500" />
          </IconButton>

          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon className="text-purple-500" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
