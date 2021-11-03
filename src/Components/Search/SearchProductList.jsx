import React from 'react'

function SearchProductList({products}) {
    return (
        <div>
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
    )
}

export default SearchProductList
