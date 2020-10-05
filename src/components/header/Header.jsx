import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

class Header extends React.Component {
  SignOut = () => {
    auth.signOut();
  };

  render() {
    return (
      <div className="header">
        <NavLink className="logo-container" exact to="/">
          <Logo />
        </NavLink>
        <div className="options">
          <NavLink className="option" exact to="/shop">
            Shop
          </NavLink>
          <NavLink className="option" exact to="/contact">
            Contact
          </NavLink>
          {this.props.currentUser ? (
            <div className="option" onClick={this.SignOut}>
              Sign Out
            </div>
          ) : (
            <NavLink className="option" exact to="/signin">
              Sign in
            </NavLink>
          )}
          <CartIcon />
        </div>
        {this.props.Cart ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  Cart: state.Cart.hidden,
});

export default connect(mapStateToProps)(Header);
