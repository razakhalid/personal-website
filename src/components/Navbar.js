import React from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/")

  return (
    <>
      <nav className="navbar">
        <div className="logo-wrapper">
          <Link to="/personal-website">
            <img src={logo} className="logo" alt="" />
          </Link>
        </div>
        <ul className="tabs-wrapper">
          <li>
            <NavLink
              to="/personal-website"
              className="tab"
              activeClassName="active-tab"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className="tab"
              activeClassName="active-tab"
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="tab" activeClassName="active-tab">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="tab" activeClassName="active-tab">
              Contact
            </NavLink>
          </li>
        </ul>
        <Redirect to="/personal-website" />
      </nav>
    </>
  );
}
