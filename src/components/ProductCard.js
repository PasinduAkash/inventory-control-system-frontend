import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ProductCard({
  indexForColor,
  productId,
  name,
  productAbout,
  price,
  quantity,
  categoryId,
}) {
  const navigate = useNavigate();

  function handleView() {
    navigate(`/${categoryId}/products/${productId}`, {
      state: {
        productId: productId,
        name: name,
        productAbout: productAbout,
        price: price,
        quantity: quantity,
        categoryId: categoryId,
      },
    });
  }

  return (
    <tr
      className={
        indexForColor % 2 === 0
          ? "text-center bg-grayDark text-white text-sm"
          : "text-center bg-grayLight text-white text-sm"
      }
    >
      <td className="py-4">{productId}</td>
      <td className="py-4">{name}</td>
      <td className="py-4">${price}</td>
      <td className="py-4">{quantity}</td>
      <td className="py-4">
        <IconButton onClick={handleView} aria-label="view">
          <VisibilityIcon className="text-purple-500" />
        </IconButton>
      </td>
    </tr>
  );
}

export default ProductCard;
