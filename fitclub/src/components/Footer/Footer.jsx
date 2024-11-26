import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <hr style={{ background: "white" }} />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>

        <div className="log-f">
          <img src={Logo} alt="" />
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
    </div>
  );
}

export default Footer;
