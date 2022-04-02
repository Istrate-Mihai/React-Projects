import React from "react";
import TwitterIcon from "../images/Twitter Icon.png";
import FacebookIcon from "../images/Facebook Icon.png";
import InstagramIcon from "../images/Instagram Icon.png";
import GithubIcon from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={TwitterIcon} alt="No Icon" className="footer--icon" />
      <img src={FacebookIcon} alt="No Icon" className="footer--icon" />
      <img src={InstagramIcon} alt="No Icon" className="footer--icon" />
      <img src={GithubIcon} alt="No Icon" className="footer--icon" />
    </footer>
  );
}
