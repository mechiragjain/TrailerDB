import React,{useState, useEffect} from 'react';

import './Navbar.css';
import Logo from './../Images/logo.png';

function NavBar(){

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
    <div className="nav-link">
    <a className="link" href="/">Home</a>
    <a className="link" href="/movies">Movies</a>
    <a className="link" href="/tvshows">TV Shows</a>
    <a className="link" href="/upcoming">Upcoming</a>
    </div>
    </div>
  );
}

export default NavBar;
