import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "./axios";

function EditCategory() {
  const location = useLocation();
  const { id: categoryId, name, about, image } = location.state;

  const [editContent, setEditContent] = useState({
    name: name,
    description: about,
    imageURL: image,
  });

  const navigate = useNavigate();

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
      .post(`/edit/category/${categoryId}`, editContent)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-full h-full flex items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-11/12 max-w-lg mx-auto p-3 rounded-lg bg-grayLight border-purple-500 border-2 shadow-2xl text-textGray"
      >
        <label className="py-1">Category Name</label>
        <input
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="name"
          value={editContent.name}
        ></input>
        <label className="py-1">Description</label>
        <textarea
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="description"
          cols="30"
          rows="10"
          value={editContent.description}
        ></textarea>
        <label className="py-1">Image URL (Category display image)</label>
        <input
          className="p-1 bg-grayDark rounded focus:outline outline-offset-2 outline-purple-500"
          onChange={handleChange}
          type="text"
          id="imageURL"
          value={editContent.imageURL}
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

export default EditCategory;
