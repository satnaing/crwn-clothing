import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

import "./cart-icon.scss";
import Cart from "../../redux/actions/Cart";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

const CartIcon = ({ Cart, itemCount }) => (
  <div className="cart-icon" onClick={Cart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  Cart: () => dispatch(Cart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
