import React,{useState, useEffect} from 'react';

import './Navbar.css';
import Logo from './../Images/logo.png';
import Avatar from './../Images/avatar.png';

function Navbar(){

  const [show, handleShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true);
      }else
        handleShow(false);
    });
    return ()=>{
      window.removeEventListener("scroll");
    }
  },[])

  return(
    <div className={`navbar ${show && "nav_black"}`}>
      <img className="logo" src={Logo} alt="logo"/>
      <img className="avatar" src={Avatar} alt="Avatar"/>
    </div>
  );
}

export default Navbar;
