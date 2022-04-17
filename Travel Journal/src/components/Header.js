import React from "react";
import ReactDOM from "react-dom";
import icon from "../images/icon.png";

export default function Header() {
  return (
    <div className="header">
      <p className="icon--header">
        <img src={icon} /> my travel journal
      </p>
    </div>
  );
}
