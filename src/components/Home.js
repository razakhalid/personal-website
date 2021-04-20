import React from "react";
import { Link } from "react-router-dom";
import raza from "../images/raza.jpg";

export default function Home() {
  return (
    <>
      <div className="content-wrapper">
        <div className="text-wrapper">
          <div className="text-header">
            <h2>Hi, I'm Raza.</h2>
          </div>
          <div className="text-body">
            <h1>
              I'm a Front End Developer and UX Designer with 2+ years of
              professional experience. Welcome to my website!
            </h1>
          </div>
          <div className="btn-wrapper"></div>
        </div>
        <div className="img-wrapper">
          <img src={raza} />
        </div>
      </div>
    </>
  );
}
