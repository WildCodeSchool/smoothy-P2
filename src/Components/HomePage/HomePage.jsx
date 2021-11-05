import React, { useEffect, useState } from "react";
import "./HomePage.css";
import barcode from "../../Assets/barcode3.svg";
import SearchBar from "../Search/SearchBar";
import {useHistory} from "react-router-dom";
import ProductList from "../ProductList/ProductList";

let test=false;

function HomePage() {
  const history = useHistory()
  const [classImg, setClassImg] = useState("image-Slide");
  const [classText, setText] = useState("text-Slide");
  const [classSearch, setSearch] = useState("search-Hide");

  const handleClick = (props) => {
    setClassImg("image-Head");
    setText("text-Home-Hide");
    setSearch("search-Location");
  };
  
   const [term, setTerm] = useState("");
   const handleChange = event => setTerm(event.target.value);
   
   const [termF, setTermF] = useState("");
   const handleSubmit = e => {
     e.preventDefault();
     setTermF(term);
     test=true;
    //history.push("/ProductList");
   };

   useEffect(()=>{
     console.log(test);
     if (test) {history.push("/ProductList")};
   },[test]);

  return (  
    <div>
      <div className={classImg} onClick={handleClick}>
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
      <div className="prod-res">
        {termF && (<ProductList term={termF}/>)}
      </div>
    </div>
  );
}


export default HomePage;
