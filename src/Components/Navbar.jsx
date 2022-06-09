import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from './Button/Cart';
import Login from './Button/Login';
import Signup from './Button/Signup';


const Navbar = () => {
  return (
    <>
    
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid py-2">
    
    <NavLink className="navbar-brand mx-auto fw-bolder display-4" to="/">V_MART</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="home fw-bolder ms-4" aria-current="page" to="/home">Home</NavLink>
        </li>
        
        
        <li className="nav-item">
          <NavLink className="product fw-bolder ms-4" to="/products">Products</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="about fw-bolder ms-4" to="/about">About</NavLink>
        </li>
        
         <li className="nav-item">
          <NavLink className="contact fw-bolder ms-4" to="/contact">Contact</NavLink>
        </li> 
        </ul>
      
    </div>
    <Login/>
    <Signup/>
    <Cart/>
  </div>
</nav>
   

    </>
  )
}

export default Navbar;