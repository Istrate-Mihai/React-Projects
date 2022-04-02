import React from "react";
import PersonalImage from "../images/avatar.jpg";
import Mail from "../images/mail.png";
import LinkedIn from "../images/linkedin.png";

export default function Info() {
  return (
    <header>
      <img src={PersonalImage} className="info--avatar" alt="No Avatar" />
      <h1 className="info--title">Istrate Mihai</h1>
      <p className="info--p1">Frontend Developer</p>
      <p className="info--p2">istratemihai.website</p>
      <button className="info--btn1">
        <img src={Mail} alt="No Mail Photo" className="info--mail" />
        Email
      </button>
      <button className="info--btn2">
        <img
          src={LinkedIn}
          alt="No LinkedIn Photo"
          className="info--linkedin"
        />
        LinkedIn
      </button>
    </header>
  );
}
