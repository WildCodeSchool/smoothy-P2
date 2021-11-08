import React, { useState,useEffect } from "react";
import axios from "axios";
import SearchProductList from "./SearchProductList.jsx";
import './SearchFunc.css'

let url = "";

const SearchFunc = ({produits}) => {
  /\d/.test(produits)
     ? url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_id&tag_contains_0=contains&tag_0=${produits}&fields=code,product_name_fr,brands_tags,image_front_small_url,quantity,nutriscore_grade,labels_old&json=true`
     : url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_keywords&tag_contains_0=contains&tag_0=${produits}&json=true`
  
 const [products, setProducts] = useState(null);
 axios(url).then(({ data }) => setProducts(data.products));


  return (
    <div className="Container">
      <SearchProductList products={products}/>
    </div>
  );
};

export default SearchFunc;   