import React from 'react';
import "./Header.css"
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header>
      <Link to="/" className='logo'>
        <img src={logo} alt="logo" />
        <span>Shopping cart</span>
      </Link>
      <nav className='navigation'>
        <NavLink to="/" className="link" exact>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className='items'>
        <span>Cart : 2</span>
      </Link>
    </header>
  )
}

export default Header;
