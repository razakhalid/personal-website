import React from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-wrapper">
          <Link to="/personal-website">
            <img src={logo} className="logo" />
          </Link>
        </div>
        <div className="links-wrapper">
          <Link to="/personal-website" className="btn">
            Home
          </Link>
          <Link to="/experience" className="btn">
            Experience
          </Link>
          <Link to="/about" className="btn">
            About
          </Link>
          <Link to="/contact" className="btn">
            Contact
          </Link>
          <Redirect to="/personal-website" />
        </div>
      </nav>
    </div>
  );
}
