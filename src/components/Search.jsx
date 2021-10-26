import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("73762sqqqqq8064502");
  const [termF, setTermF] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const url = `https://world.openfoodfacts.org/api/v0/product/${term}.json`;

    axios(url).then(({ data }) => {
      setProduct(data.product);
    });
  }, [termF]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTermF(term);
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {" "}
      <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2 m-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
      </form>
      {/* falsy and truthy values */}
      {console.log(product)}
      {product && (
        <div>
          <h2>Marque :{product.brands}</h2>
          {
            <div>
              Additifs :
              {product.additives_original_tags.map((add) => (
                <p key={add._id}> {add.split(":")[1]} </p>
              ))}
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Search;
