import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchFunc from '../Search/SearchFunc.jsx'
import ArrowUp from "../ProductList/Arrows/ArrowUp";
import './Product.css'

const Product = (props) => {
    const res = props.match.params.product;
    return (
        <div>
          <NavBar />
          <SearchFunc produits={res}/>
          <ArrowUp/>
          {console.log(`Product : ${res}`)}
        </div>
      );
    }

export default Product

//3274080005003