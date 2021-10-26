import React, { useState, useEffect } from "react";

const Product = ({ name, price }) => {
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(price * qty);

  // run the function inside of useEffect at the first render and everytime qty changes
  const callToUseEffect = () => {
    console.log("use effect");
    setTotal(price * qty);
  };

  useEffect(callToUseEffect, [qty]); //

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <input
            type="range"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </td>
        <td>{total}</td>
      </tr>
    </>
  );
};

export default Product;
