import React from "react";
import { Link } from "react-router-dom";
import raza from "../images/raza.jpg";

export default function Home() {
  return (
    <>
      <div className="text-wrapper">
        <div className="text-header">
          <h2 className="title-large">Hi, I'm Raza.</h2>
        </div>
        <div className="text-body">
          <h1 className="title-medium">
            I'm a UX Designer and Front End Engineer based out of
            Minneapolis, MN. 3 of my strongest passions are fitness, music and
            design. Welcome to my website!
          </h1>
        </div>
        <div className="btn-wrapper">
          <Link to="/contact">
            <button className="btn">Let's Talk</button>
          </Link>
        </div>
      </div>

      <div className="img-wrapper">
        <img className="img" src={raza} alt="" />
      </div>
    </>
  );
}
