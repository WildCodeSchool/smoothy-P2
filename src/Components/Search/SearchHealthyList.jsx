import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchProductList from "./SearchProductList.jsx";
import "./SearchFunc.css";
import PageListSetter from "../ProductList/PageListSetter.jsx";
import { useHistory } from "react-router-dom";
import ProductList_Equiv from "../ProductList/ProductList_Equiv.jsx"

let url = "";

const SearchHealthyList = ({ produits }) => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  const [listElt, setListElt] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setPage(1);
    setListElt([]);
  }, [produits]);

  useEffect(() => {
      url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=codes_tags&tag_contains_0=contains&tag_0=${produits}&fields=categories,_id,code,product_name_fr,brands_tags,image_front_small_url,image_url,quantity,nutrition_grade_fr,nutrition_grade_fr,nutrition_grades,labels_old,brands,generic_name,_keywords,nutrition_grade_fr,brands_tags&page_size=24&page=${page}&json=true`


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
  
};

export default SearchHealthyList;
