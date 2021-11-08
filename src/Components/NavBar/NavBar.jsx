import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MainLogo from  '../../Assets/logo2.png';
import BarCode from  '../../Assets/barcode3.svg';
import SearchBar from "../Search/SearchBar.jsx";
import './NavBar.css';
import {useHistory} from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const [term, setTerm] = useState("");
  const handleChange = event => setTerm(event.target.value);
  
  const [termF, setTermF] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    setTermF(term);
    // if number
    //.push(/Product)
    //else if string
    //.push(productList)
    // else none
    //.push(Notfind)
   history.push(`/ProductList/${term}`);
  };



  return (
    
    <nav className="navbar">
      <div>
      <Link to="OpenPage"><img className='main-logo' src={MainLogo} alt='test'></img></Link>
      </div>
      <div>
      <Link to='OpenPage'><img className='barcode-logo2' src={BarCode} alt='test'/></Link>
      </div>
       <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
    </nav>
  );
};

export default NavBar;