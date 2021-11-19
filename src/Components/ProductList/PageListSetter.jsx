import React from "react";
import "./PageListSetter.css";
import "../Search/SearchFunc.css";
import moreProducts from "../../Assets/moreProducts.png";

function PageListSetter({ page, setPage }) {
  const handleClick = () => {
    setPage(++page);
  };
  return (
    <div className="more-button">
      <img onClick={handleClick} src={moreProducts} alt="more-products" />
    </div>
  );
}

export default PageListSetter;
