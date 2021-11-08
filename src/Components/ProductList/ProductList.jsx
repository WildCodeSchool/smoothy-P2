import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "./ProductList.css";
import SearchFunc from "../Search/SearchFunc.jsx";
import ArrowUp from "../ArrowUp/ArrowUp.jsx";
import Footer from "../Footer/Footer.jsx";


const ProductList = (props) => {
  const res = props.match.params.product;

  
  return (
    <div>
      <NavBar />
      <SearchFunc produits={res}/>
      <ArrowUp/>
      <Footer />
    </div>
  );
}

export default ProductList; 
