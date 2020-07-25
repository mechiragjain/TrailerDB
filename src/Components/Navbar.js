import React from 'react';

import './Navbar.css';
import Logo from './../Images/logo.png';

function Navbar(){
  return(
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo"/>
    </div>
  );
}

export default Navbar;
