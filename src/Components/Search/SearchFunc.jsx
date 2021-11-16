import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchProductList from "./SearchProductList.jsx";
import "./SearchFunc.css";
import PageListSetter from "../ProductList/PageListSetter.jsx";
import SearchProduct from "../Product/SearchProduct.jsx";
import { useHistory } from "react-router-dom";
let url = "";

const SearchFunc = ({ produits }) => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [listElt, setListElt] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setPage(1);
    setListElt([]);
  }, [produits]);

  useEffect(() => {
    /\d/.test(produits)
      ? (url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_id&tag_contains_0=contains&tag_0=${produits}&json=true`)
      : (url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=_keywords&tag_contains_0=contains&tag_0=${produits}&fields=categories,_id,code,product_name_fr,brands_tags,image_front_small_url,quantity,nutriscore_grade,labels_old,brands,_keywords,nutrition_grade_fr,categories,generic_name&page_size=24&page=${page}&json=true`);


    const getProducts = async () => {
      await axios.get(url).then(({ data }) => setProducts(data.products));
    };
    getProducts();
  }, [produits, page]);

  useEffect(() => {
    if (page==1 && products) {setListElt([...products])}
    if (page!=1 && products) {setListElt([...listElt, ...products])}
  }, [products])


  useEffect(() => {
    if (page == 1 && products) {
      setListElt([...products]);
    }
    if (page != 1 && products) {
      setListElt([...listElt, ...products]);
    }
  }, [products]);

  if (/\d/.test(produits)) {
    return (
      <div className="Container">
        <div className="search-bar"></div>
        {products && products.length == 0 ? (
          history.push(`/error/`)
        ) : (
          <SearchProduct products={products} />
        )}
      </div>
    );
  } else {
    return (
      <div className="Container">
        <div className="search-bar"></div>

        {products && products.length == 0 ? (
          history.push(`/error/`)
        ) : (
          <SearchProductList products={listElt} />
        )}

        <PageListSetter page={page} setPage={setPage} produits={produits} />
      </div>
    );
  }
};

export default SearchFunc;
