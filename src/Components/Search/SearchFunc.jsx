import React, { useState,useEffect } from "react";
import axios from "axios";
import SearchProductList from "./SearchProductList.jsx";
import './SearchFunc.css'
import PageListSetter from '../ProductList/PageListSetter'
import SearchBar from "./SearchBar.jsx";

let url = "";

const SearchFunc = ({produits}) => {

 
  const [products, setProducts] = useState(null);

  const [page, setPage] = useState(1);

useEffect(() => {
  
  /\d/.test(produits)

  ? url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_id&tag_contains_0=contains&tag_0=${produits}&fields=code,product_name_fr,brands_tags,image_front_small_url,quantity,nutriscore_grade,labels_old,brand,_keywords&json=true` 

  : url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_keywords&tag_contains_0=contains&tag_0=${produits}&fields=code,product_name_fr,brands_tags,image_front_small_url,quantity,nutriscore_grade,labels_old,brands,_keywords&page_size=5&page=${page}&json=true`

  if (url) {
    axios(url).then(({ data }) => {
    setProducts(data.products);
    })
  }

}, [products],[page])

  return (
    <div className="Container">

    <div className='search-bar'>  
    </div>
      <SearchProductList products={products}/>
      <PageListSetter page={page} setPage={setPage} produits={produits}/>

    </div>
  );
};

export default SearchFunc;   