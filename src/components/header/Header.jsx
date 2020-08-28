import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

const Header = () => (
  <div className="header">
    <NavLink className="logo-container" exact activeCLassName="active-nav" to="/">
      <Logo />
    </NavLink>
    <div className="options">
      <NavLink className="option" exact activeCLassName="active-nav" to="/shop">
        Shop
      </NavLink>
      <NavLink className="option" exact activeCLassName="active-nav" to="/contact">
        Contact
      </NavLink>
      <NavLink className="option" exact activeCLassName="active-nav" to="/signin">
        Sign in
      </NavLink>
    </div>
  </div>
);

export default Header;
