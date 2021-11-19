import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchHealthyList from "../Search/SearchHealthyList.jsx";
import ArrowUp from "../ProductList/Arrows/ArrowUp.jsx";

const ProductListEquiv = (props) => {
  const res = props.match.params.healthy;
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <SearchHealthyList produits={res} />
      <ArrowUp />
      <Footer />
    </div>
  );
};

export default ProductListEquiv;
