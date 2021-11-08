import React from "react";

const fistLetterUpperCase = (a) =>{
  
  return (a+'').charAt(0).toUpperCase()+a.substr(1);

}

const dashRemover = (str)=> 
{
  return str.replaceAll('-', ' ');
}



function SearchProductList({ products }) {
  return (
    <div>
      {products && (
        <div className="map-products">
          {products.map((product) => (
      <figure key={product.id}>
          <img
          className="images"
          key={product.id}
          src={product.image_front_small_url}
          alt={""}
        /> 
        <figcaption>
          <p className="items" key={product.id}>
            {(product.product_name_fr).toUpperCase()} - {product.quantity} 
            
            </p>
            <p>{dashRemover(fistLetterUpperCase(product.brands_tags[0]))}</p>
        </figcaption>
      </figure>
        ))}

        </div>
      )}
    </div>
  );
}

export default SearchProductList;
