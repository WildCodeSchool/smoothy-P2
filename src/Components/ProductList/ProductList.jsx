import React from "react";
import NavBar from "../NavBar/NavBar";
import "./ProductList.css";
import SearchFunc from "../Search/SearchFunc";


const ProductList = (props) => {
  const res = props.match.params.product;

  
  return (
    <div>
      <NavBar />
      <SearchFunc produits={res}/>
    </div>
  );
}

export default ProductList;
