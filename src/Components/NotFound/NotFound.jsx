import React, { useState } from "react";
import DisplayScan from "../Scanner/DisplayScan.jsx";
import SearchBar from "../Search/SearchBar.jsx";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import sigmund from "../../Assets/giphy.gif";
import "./NotFound.css";

function NotFound() {
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
      <div className="image-SlideNotfound"></div>
      <div className="div-GifNotfound">
        <img className="img-NotFound" src={sigmund} alt="img-notfound" />
      </div>

      <p className="txt-Pnotfound">
        Le produit que vous demandez n&apos;existe pas. <a href="https://fr.openfoodfacts.org/contribuer">Cliquez ici</a> si
        vous souhaitez contribuer à l&apos;enrichissement de notre catalogue.{" "} 
      </p>
      <p className="txt-Pnotfound">
      ✨ Pour effectuer une nouvelle recherche ✨{" "}
      </p>

      <div className="search-Location">
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <DisplayScan />
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
