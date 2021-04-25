import React from "react";
// import { Link } from "react-router-dom";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import mail from "../icons/mail.png";

export default function Contact() {
  return (
    <>
      <div className="icon-wrapper">
        <a
          href="https://www.linkedin.com/in/raza-khalid-91b05013b/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon btn" src={linkedin} alt=""></img>
        </a>
        <a
          href="https://github.com/razakhalid"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon btn" src={github} alt="" />
        </a>
        <a href="mailto:ra97za@gmail.com" rel="noreferrer">
          <img className="icon btn" src={mail} alt="" />
        </a>
      </div>
    </>
  );
}
