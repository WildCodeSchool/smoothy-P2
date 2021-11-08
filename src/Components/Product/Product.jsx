import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchFunc from '../Search/SearchFunc.jsx'
import ArrowUp from '../ProductList/Arrows/ArrowUp.jsx'
import './Product.css'
import ProductSheet from './ProductSheet.jsx'

const Product = (props) => {
    const res = props.match.params.product;
    return (
        <div>
          <NavBar />
          <SearchFunc produits={res}/>
          <ArrowUp/>
          {console.log(`Product : ${res}`)}
          {/* <SearchFunc product={res}/>
          <ProductSheet /> */}
          <Footer/>
        </div>
      );
    }

export default Product

//3274080005003