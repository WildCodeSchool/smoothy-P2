import React, { useState } from "react";

import './styles/HomePage.css';


function HomePage() {
  const [classImg, setClassImg] = useState("image-Slide");
  const [classText, setText] = useState("text-Slide");
  const [classSearch, setSearch] = useState("search-Hide");

  const handleClick = () => {
    setClassImg("image-Head");
    setText("text-Home-Hide");
    setSearch("search-Location");
  };
  return (
    <div>
      <div className={classImg} onClick={handleClick}>
        <p className={classText}>
          Hello, cliquez sur écran pour chercher un produit.
        </p>
      </div>
      <div className={classSearch}>
        <p>Salut test</p>
      </div>
    </div>
  );
}

export default HomePage;