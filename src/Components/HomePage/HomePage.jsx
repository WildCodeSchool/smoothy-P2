import React, { useState } from "react";
import "./HomePage.css";
import barcode from "../../Assets/barcode3.svg";
import SearchFunc from "../Search/SearchFunc.jsx"

function HomePage() {
  const [classImg, setClassImg] = useState("image-Slide");
  const [classText, setText] = useState("text-Slide");
  const [classSearch, setSearch] = useState("search-Hide");

  const handleClick = () => {
    setClassImg("image-Head");
    setText("text-Home-Hide");
    setSearch("search-Location");
  };
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
        <SearchFunc />

        <img className="barcode-logo" src={barcode} alt="test" />
      </div>
    </div>
  );
}

export default HomePage;
