import React from "react";
import "./OpenPage.css";
import barcode from "../../Assets/barcode3.svg";
import SearchFunc from "../Search/SearchFunc.jsx";

function OpenPage() {
  return (
    <div>
      <div className="image-Slide1"></div>
      <div className="search-Location1">
        <button className="food-pref1" id="food-pref1">
          Préférences Alimentaires
        </button>
        <SearchFunc />

        <img className="barcode-logo1" src={barcode} alt="test" />
      </div>
    </div>
  );
}

export default OpenPage;
