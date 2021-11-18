import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchHealthyList from "../Search/SearchHealthyList.jsx";


const ProductListEquiv = (props) => {
  const res = props.match.params.healthy;
  console.log(res)
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <SearchHealthyList produits={res} />
      <Footer />
    </div>
  );
};

export default ProductListEquiv;
