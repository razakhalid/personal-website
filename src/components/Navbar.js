import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </div>
        <div className="links-wrapper">
          <Link to="/" className="btn">
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
        </div>
      </nav>
    </div>
  );
}
