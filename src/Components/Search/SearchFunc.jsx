import React, { useState,useEffect } from "react";
import axios from "axios";
import SearchProductList from "./SearchProductList.jsx";
import './SearchFunc.css'

let url = "";

const SearchFunc = ({produits}) => {
 
  const [products, setProducts] = useState(null);

  /\d/.test(produits)
     ? url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_id&tag_contains_0=contains&tag_0=${produits}&json=true`
     : url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_keywords&tag_contains_0=contains&tag_0=${produits}&json=true`
  

  if (url) {
    axios(url).then(({ data }) => {
    setProducts(data.products);
    })
  }
  
  return (
    
    <div className="Container">
    <div className='search-bar'>  
    </div>
      <SearchProductList products={products}/>
    </div>
  );
};

export default SearchFunc;   