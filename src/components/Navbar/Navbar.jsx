import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <img src={assets.log} alt="" />
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile App</li>
          <li>Contact</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
