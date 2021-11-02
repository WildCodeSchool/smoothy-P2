import React, { useEffect, useState } from "react";
import axios from "axios";
import './SearchFunc.css'

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
      <h1>Products List</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2 m-2"
          type="search"
          placeholder="Chercher un produit"
          aria-label="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>

      {products && (
        <div className="map-products">
          {products.map((product) => (
            <p className="items" key={product.id}>
              Marque :{product.brands}
              <img
                className="images"
                key={product.id}
                src={product.image_front_small_url}
                alt={""}
              />
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFunc;