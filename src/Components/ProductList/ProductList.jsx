import React from "react";
import NavBar from "../NavBar/NavBar";
import "./ProductList.css";
import HomePage from "../HomePage/HomePage";

function ProductList({term}) {
 console.log(term);
  return (
    <div>
      <NavBar />
      <p>{term}</p>
    </div>
  );
}

export default ProductList;
