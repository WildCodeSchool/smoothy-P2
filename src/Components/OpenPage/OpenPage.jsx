import React, { useState } from "react";
import SearchBar from "../Search/SearchBar.jsx";
import { useHistory } from "react-router-dom";
import "./OpenPage.css";
import DisplayScan from "../Scanner/DisplayScan.jsx";

function HomePage() {
  const history = useHistory();

  const [term, setTerm] = useState("");
  const handleChange = (event) => setTerm(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    /\d/.test(term)
      ? history.push(`/Product/${term}`)
      : history.push(`/ProductList/${term}`);
  };

  return (
    <div>
      <button className="image-Head1"> </button>
      <div className="search-Location1">
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />

        <DisplayScan />
      </div>
    </div>
  );
}

export default HomePage;
