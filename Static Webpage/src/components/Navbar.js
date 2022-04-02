import React from "react";
import Logo from "../images/react-logo.jpg";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={Logo} alt="no-logo" className="nav--icon" />
      <h3 className="nav--logo_text">React Facts</h3>
      <h4 className="nav--title">React Course Project 1</h4>
    </nav>
  );
}
