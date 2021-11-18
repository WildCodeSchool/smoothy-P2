import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import NotFound from "../NotFound/NotFound";

const fistLetterUpperCase = (a) => {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
};

const dashRemover = (str) => {
  return str.replaceAll("-", " ");
};

function SearchProductList({ products, favorites }) {
  console.log(favorites);
  const history = useHistory();
  products &&
    products.length == 1 &&
    history.push(`/Product/${products[0].code}`);
  return (
    <div>
      {products && (
        <div className="map-products">
          {products.map((product) => (
            <div>
              <Link to={`/Product/${product.code}`}>
                <figure key={product.id}>
                  {favorites.some((el) => el.productID === product._id) ? (
                    <p>❤️</p>
                  ) : null}
                  {product.image_front_small_url ? (
                    <img
                      className="images"
                      key={product.id}
                      src={product.image_front_small_url}
                      alt={"product-img"}
                    />
                  ) : (
                    <img
                      className="images"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg"
                    />
                  )}
                  <figcaption>
                    <p className="items" key={product.id}>
                      {product.product_name_fr} - {product.quantity}
                    </p>
                    <p>
                      {/* {product.brands ?  product.brands_tags[0].replaceAll('-',' '): 'none'} */}
                    </p>
                    {product.nutrition_grade_fr ? (
                      <img
                        className="nutri-list"
                        src={
                          "https://fr.openfoodfacts.org/images/misc/nutriscore-" +
                          product.nutrition_grade_fr +
                          ".svg"
                        }
                        alt={""}
                      />
                    ) : (
                      <img
                        className="nutri-listNone"
                        src="https://static.openfoodfacts.org/images/attributes/nutriscore-unknown.svg"
                      />
                    )}
                  </figcaption>
                </figure>
              </Link>
              <button
                onClick={() => {
                  console.log(product);
                  axios.post("http://localhost:5000/favorites", {
                    productId: product._id
                  });
                }}
              >
                Add to favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProductList;
