import React from "react";
import "../footer/Footer.scss";
import logo from "../../assets/favicon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Little Lemon Restaurant" />

      <div className="footer__links">
        <div className="links">
          <h3>Doormat Navigation</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservation">Reservation</a>
          <a href="#order">Order online</a>
          <a href="#login">Login</a>
        </div>
        <div className="links">
          <h3>Contact</h3>

          <a href="#home">Address</a>
          <a href="#about">Contact</a>
          <a href="#menu">Email</a>
        </div>
        <div className="links">
          <h3>Social Media Links</h3>

          <a href="#home">Facebook</a>
          <a href="#about">Instagram</a>
          <a href="#menu">Twitter</a>
          <a href="#reservation">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
