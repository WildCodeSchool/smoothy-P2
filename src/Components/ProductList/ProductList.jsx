import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx"
import SearchFunc from "../Search/SearchFunc.jsx";
import "./ProductList.css";

function ProductList() {
  return (
    <div>
      <NavBar />
      <SearchFunc/>
      <Footer />
    </div>
  );
}

export default ProductList;
