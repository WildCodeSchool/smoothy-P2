import React from "react";
import NavBar from "../NavBar/NavBar";
import "./ProductList.css";
import SearchFunc from "../Search/SearchFunc";
import ArrowUp from "./Arrows/ArrowUp";


const ProductList = (props) => {
  const res = props.match.params.product;

  
  return (
    <div>
      <NavBar />
      <SearchFunc produits={res}/>
      <ArrowUp/>
    </div>
  );
}

export default ProductList; 
