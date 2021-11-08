import React from "react";

function SearchProductList({ products }) {
  return (
    <div>
      {products && (
        <div className="map-products">
          {products.map((product) => (
            <div className="items" key={product.id}>
              <div className="items1" >
              <img
                className="images"
                key={product.id}
                src={product.image_front_small_url}
                alt={""}
              />
              </div>
              <p className='pp'>{product.brands}
              </p><div className='ppppp'><div className ='ppp'>NutriScore</div> 
              <div className ='pppp'>Label</div>
              </div>
               
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProductList;
