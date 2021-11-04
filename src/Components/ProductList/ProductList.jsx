import React from "react";
import NavBar from "../NavBar/NavBar";
import "./ProductList.css";
import HomePage from "../HomePage/HomePage";


function ProductList(props) {
  console.log(props.term)
  return (
    <div>
      <NavBar />
      <p>{props.term}</p>
    </div>
  );
}

export default ProductList;
