import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

import "./cart-icon.scss";
import Cart from "../../redux/actions/Cart";

const CartIcon = ({ Cart }) => (
  <div className="cart-icon" onClick={Cart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  Cart: () => dispatch(Cart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
