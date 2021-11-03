import React from 'react';
import {Link} from 'react-router-dom'
import mainLogo from  '../Navbar/assets/logo2.png'
import barcode from  '../Navbar/assets/barcode3.svg'
import SearchBar from '../Search/SearchBar';
import './stylesNav.css'

const Navbar = () => {
  return (
    
    <nav className="navbar">
      
      <div>
      <Link to="/"><img className='main-logo' src={mainLogo} alt='test'></img></Link>
      </div>
      <div>
        <Link to='barcode'><img className='barcode-logo' src={barcode} alt='test'/></Link>
      </div>
      <div>
        
      </div>
    </nav>
  );
};

export default Navbar;

