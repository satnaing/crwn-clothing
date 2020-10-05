import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

import "./cart-icon.scss";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/actions/cart";

const CartIcon = ({ Cart, itemCount }) => (
  <div className="cart-icon" onClick={Cart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  Cart: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
