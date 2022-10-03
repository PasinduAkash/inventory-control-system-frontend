import React from "react";
import { Link } from "react-router-dom";
import CategoryAddButton from "./CategoryAddButton";

function NavBar() {
  const pathName = window.location.pathname;

  return (
    <nav className="flex bg-grayLight px-6 sm:px-12 py-3 justify-between items-center">
      <h1 className="text-purple-500 text-2xl font-bold">Inventory++</h1>
      {pathName === `/` && (
        <Link to="/create/category">
          <CategoryAddButton />
        </Link>
      )}
    </nav>
  );
}

export default NavBar;
