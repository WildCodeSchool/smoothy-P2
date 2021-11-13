import React from "react";
import { Link } from "react-router-dom";

const fistLetterUpperCase = (a) => {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
};

const dashRemover = (str) => {
  return str.replaceAll("-", " ");
};

function SearchProductList({ products }) {
  return (
    <div>
      {products && (
        <div className="map-products">
          {products.map((product) => (
            <figure key={product.id}>
              <Link to={`/Product/${product.code}`}>
                {" "}
                <img
                  className="images"
                  key={product.id}
                  src={product.image_front_small_url}
                  alt={"product-img"}
                />{" "}
              </Link>
              <figcaption>
                <p className="items" key={product.id}>
                  {product.product_name_fr} - {product.quantity}
                </p>
                <p>
                  {dashRemover(fistLetterUpperCase(product.brands_tags[0]))}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProductList;
