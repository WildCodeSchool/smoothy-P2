import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchFunc from '../Search/SearchFunc.jsx'
import './Product.css'

const Product = (props) => {
    const res = props.match.params.product;
    return (
        <div>
          <NavBar />
          <SearchFunc produits={res}/>
          {console.log(`Product : ${res}`)}
         <Footer/> 
        </div>
      );
    }

export default Product

//3274080005003