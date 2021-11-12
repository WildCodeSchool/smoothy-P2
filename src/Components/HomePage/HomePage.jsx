import React, { useState } from "react";
import barcode from "../../Assets/barcode3.svg";
import SearchBar from "../Search/SearchBar.jsx";
import {useHistory} from "react-router-dom";


import "./HomePage.css";
import Product from "../Product/Product";

function HomePage() {
  const history = useHistory()
  const [classImg, setClassImg] = useState("image-Slide");
  const [classText, setText] = useState("text-Slide");
  const [classSearch, setSearch] = useState("search-Hide");

  const handleClick = () => {
    setClassImg("image-Head");
    setText("text-Home-Hide");
    setSearch("search-Location");
  };
  
   const [term, setTerm] = useState("");
   const handleChange = event => setTerm(event.target.value);
   

  
   const handleSubmit = (e) => {
     e.preventDefault();
     /\d/.test(term)
     ? history.push(`/Product/${term}`)
     : history.push(`/ProductList/${term}`);
   };
  

  return (  
    <div>
      <div className={classImg} onClick={handleClick}> {/*Modifier div car pa bon en jsv Onclick => evenement pas bon sur balise statike ex: possible button */}
        <p className={classText}>
          Hello, cliquez sur écran pour chercher un produit.
        </p>
      </div>
      <div className={classSearch}>
        <button className="food-pref" id="food-pref">
          Préférences Alimentaires
        </button>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <img className="barcode-logo" src={barcode} alt="test" />
      </div>
     
    </div>
  );
}


export default HomePage;
