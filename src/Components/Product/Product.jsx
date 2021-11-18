import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchFunc from "../Search/SearchFunc.jsx";


const Product = (props) => {
  const res = props.match.params.product;
  return (
    <div>
      <NavBar />
      <SearchFunc produits={res} />
      <Footer />
    </div>
  );
};

export default Product;

//3274080005003
