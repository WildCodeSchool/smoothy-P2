import React, {useState} from "react";
import "./OpenPage.css";
// import barcode from "../../Assets/barcode3.svg";
import SearchBar from "../Search/SearchBar";

function OpenPage() {
  const [term, setTerm] = useState("");
  const handleChange = event => setTerm(event.target.value);

  return (
    <div>
      <div className="image-Slide1"></div>
      <div className="search-Location1">
        <button className="food-pref1" id="food-pref1">
          Préférences Alimentaires
        </button>
        <SearchBar handleChange={handleChange} />
        <h1>{term}</h1>
        {/* <img className="barcode-logo1" src={barcode} alt="test" /> */}
      </div>
    </div>
  );
}

export default OpenPage;
