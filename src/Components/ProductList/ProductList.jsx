import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import SearchFunc from "../Search/SearchFunc.jsx";
import ArrowUp from "../ProductList/Arrows/ArrowUp.jsx";
import Footer from "../Footer/Footer.jsx";

const ProductList = (props) => {
  const res = props.match.params.product;

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <SearchFunc produits={res} />
      <ArrowUp />
      <Footer />
    </div>
  );
};

export default ProductList;
