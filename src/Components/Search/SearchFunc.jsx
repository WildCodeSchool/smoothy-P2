import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchProductList from "./SearchProductList.jsx";
import "./SearchFunc.css";
import PageListSetter from "../ProductList/PageListSetter.jsx";
// import SearchProduct from "../Product/SearchProduct.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import SearchProduct from "../Product/SearchProduct"
let url = "";

const SearchFunc = ({ produits }) => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    /\d/.test(produits)
      ? (url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_id&tag_contains_0=contains&tag_0=${produits}&json=true`)
      : (url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_keywords&tag_contains_0=contains&tag_0=${produits}&fields=_id,code,product_name_fr,brands_tags,image_front_small_url,quantity,nutriscore_grade,labels_old,brands,_keywords&page_size=24&page=${page}&json=true`);

    const getProducts = async () => {
      await axios.get(url).then(({ data }) => setProducts(data.products));
    };
    getProducts();
  }, [produits, page]);

  useEffect(() => {
    setPage(1);
  }, [produits]);

  if (/\d/.test(produits)) {
    return (
      <div className="Container">
        <div className="search-bar"></div>
        {(products && products.length==0) ? <NotFound/> : <SearchProduct products = {products}/>} 
      </div>
    );
  } else {
    return (
      <div className="Container">
        <div className="search-bar"></div>
        {console.log(products)}
        {(products && products.length==0) ? <NotFound /> : <SearchProductList products={products} />}
        {/* {(products && products.length==1) ? <SearchProduct products = {products[0].code}/> : <SearchProductList products={products} />}  */}
        {/* <PageListSetter page={page} setPage={setPage} produits={produits} /> */}
      </div>
    );
  }
};

export default SearchFunc;
