import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="text-wrapper">
        <div className="text-header">
          <h2>Hi, I'm Raza.</h2>
        </div>
        <div className="text-body">
          <h1>
            I'm a Front End Developer and UX Designer specializing in React.
          </h1>
        </div>
        <div className="btn-container"></div>
      </div>
      <div className="image-wrapper"></div>
    </>
  );
}
