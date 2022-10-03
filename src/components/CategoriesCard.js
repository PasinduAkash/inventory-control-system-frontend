import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "./axios";

function CategoriesCard({ id, name, about, image }) {
  const navigate = useNavigate();

  function handleView() {
    navigate(`/${id}/products`, { state: { categoryId: id } });
  }

  function handleEdit() {
    navigate(`/edit/category/${id}`, {
      state: { id: id, name: name, about: about, image: image },
    });
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios
        .post(`/delete/category/${id}`)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="w-3/4 p-3 my-2 mx-auto flex flex-col justify-between bg-grayLight border-purple-500 border-2 rounded-lg hover:shadow-2xl">
      <img
        src={image}
        className="w-32 h-32 rounded-full mx-auto"
        alt="category"
      ></img>
      <h1 className="text-white text-center pt-2">{name}</h1>
      <p className="text-textGray text-center my-1">{about}</p>
      <div className="flex justify-center">
        <IconButton onClick={handleView} aria-label="view">
          <VisibilityIcon className="text-purple-400" />
        </IconButton>

        <IconButton onClick={handleEdit} aria-label="edit">
          <EditIcon className="text-purple-400" />
        </IconButton>

        <IconButton onClick={handleDelete} aria-label="delete">
          <DeleteIcon className="text-purple-400" />
        </IconButton>
      </div>
    </div>
  );
}

export default CategoriesCard;
