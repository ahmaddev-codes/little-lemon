import React from "react";
import "../header/Header.scss";
import Nav from "../header/nav/Nav";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <Nav />
    </nav>
  );
};

export default Header;
