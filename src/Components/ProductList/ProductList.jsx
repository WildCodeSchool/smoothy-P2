import React from "react";
import NavBar from "../NavBar/NavBar";
import "./ProductList.css";
// import HomePage from "../HomePage/HomePage";


const ProductList = (props) => {
  const params = props.match.params;
  return (
    <div>
      <NavBar />
      <p>{params.product}</p>
    </div>
  );
}

export default ProductList;
