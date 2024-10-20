import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Menu");
  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("Mobile App")}
            className={menu === "Mobile App" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("Contact")}
            className={menu === "Contact" ? "active" : ""}
          >
            Contact
          </li>
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
