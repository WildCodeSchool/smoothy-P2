import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchProductList from "./SearchProductList";
import './SearchFunc.css'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

let url = ""; 

const SearchFunc = () => {

  const [term, setTerm] = useState("");
  //const [termBrands, setTermBrands] = useState("");
  const [termF, setTermF] = useState("");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    
    if(url){
    axios(url).then(({ data }) => {
      setProducts(data.products);
    });
  }}, [termF]);

  const handleSubmit = (e) => {
    e.preventDefault();

    url = /\d/.test(term) ? `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_id&tag_contains_0=contains&tag_0=${term}&json=true` :  `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_keywords&tag_contains_0=contains&tag_0=${term}&json=true`

    setTermF(term);
  };

  return (
    
    <div className="Container">
      <SearchBar handleSubmit={handleSubmit} term={term} setTerm={setTerm}/>
    <div className='search-bar'>  
    </div>
      <SearchProductList products={products}/>
    </div>
  );
};

export default SearchFunc;      