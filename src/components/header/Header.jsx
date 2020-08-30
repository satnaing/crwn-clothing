import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";
import { auth } from "../../firebase/firebase.utils";

class Header extends React.Component {
  SignOut = () => {
    auth.signOut();
  };

  render() {
    return (
      <div className="header">
        <NavLink className="logo-container" exact to="/">
          <Logo /> {this.props.user ? this.props.user.displayName : " "}
        </NavLink>
        <div className="options">
          <NavLink className="option" exact to="/shop">
            Shop
          </NavLink>
          <NavLink className="option" exact to="/contact">
            Contact
          </NavLink>
          {this.props.user ? (
            <div className="option" onClick={this.SignOut}>
              Sign Out
            </div>
          ) : (
            <NavLink className="option" exact to="/signin">
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
