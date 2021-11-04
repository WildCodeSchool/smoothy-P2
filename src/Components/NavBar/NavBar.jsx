import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../Assets/logo2.png";
import BarCode from "../../Assets/barcode3.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className="main-logo" src={MainLogo} alt="test"></img>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img className="barcode-logo2" src={BarCode} alt="test" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
