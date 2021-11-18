import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import SearchFunc from "../Search/SearchFunc.jsx";
import ArrowUp from "./Arrows/ArrowUp.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchHealthyList from "../Search/SearchHealthyList.jsx";
import PageListSetter from "../ProductList/PageListSetter.jsx"

const ProductListEquiv = (props) => {
  const res = props.match.params.healthy;
  console.log(res)
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <SearchHealthyList produits={res} />
      {/* <p>{res}</p> */}
      {/* <ArrowUp /> */}
      {/* <PageListSetter/> */}

      <Footer />
    </div>
  );
};

export default ProductListEquiv;
