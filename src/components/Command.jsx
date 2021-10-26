import React, { useState } from "react";
import Products from "./Products";

const Command = () => {
  let counter = 0;
  const [product, setProduct] = useState({ name: "Kebab", price: "5" });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const newProduct = { ...product };
    newProduct[e.currentTarget.name] = e.target.value;
    newProduct.id = ++counter;

    setProduct(newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts([...products, product]);

    setProduct({ ...product, name: "", price: "" });
  };

  return (
    <div className="container">
      <Products products={products} />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <div className="form-control">
              <label htmlFor="name">
                Name :
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="price">
                Price :
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <button className="btn btn-primary">Add new product</button>
        </form>
      </div>
    </div>
  );
};

export default Command;
