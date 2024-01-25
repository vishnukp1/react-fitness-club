import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="header">
      <img alt="" className="logo" src={logo} />
      <ul className="header-menu">
        <li>Home</li>
        <li>Program</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
