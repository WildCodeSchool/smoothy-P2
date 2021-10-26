import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <table className="table" style={{ marginBottom: "100px" }}>
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Unitary Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
