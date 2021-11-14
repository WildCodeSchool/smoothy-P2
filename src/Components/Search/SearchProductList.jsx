import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const fistLetterUpperCase = (a) => {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
};

const dashRemover = (str) => {
  return str.replaceAll("-", " ");
};



function SearchProductList({ products }) {
  const history = useHistory();
  (products && products.length==1) && history.push(`/Product/${products[0].code}`)
  return (
    <div>
      {products && (
        <div className="map-products">
          {products.map((product) => (
              <Link to={`/Product/${product.code}`}>
              <figure key={product.id}>
                
                <img
                  className="images"
                  key={product.id}
                  src={product.image_front_small_url}
                  alt={"product-img"}
                />
              <figcaption>
                <p className="items" key={product.id}>
                  {product.product_name_fr} - {product.quantity}
                </p>
                <p>
                  {console.log(!!product.brands)}
                  {/* {product.brands ?  product.brands_tags[0].replaceAll('-',' '): 'none'} */}
                </p>
              </figcaption>
            </figure>
            </Link>

          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProductList;
