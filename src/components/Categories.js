import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import axios from "./axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/getcategories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-grayDark">
      {categories.map((item, index) => {
        return (
          <CategoriesCard
            key={index}
            id={item.id}
            name={item.name}
            about={item.about}
            image={item.image_url}
          />
        );
      })}
    </div>
  );
}

export default Categories;
