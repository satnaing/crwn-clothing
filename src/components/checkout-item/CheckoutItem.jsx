import React from "react";
import { connect } from "react-redux";

import "./checkout-item.scss";
import {
  clearItemFromCart,
  removeItemFromCart,
  cartItems,
} from "../../redux/actions/cart";

const CheckoutItem = ({ cartItem, clearCartItem, addItem, removeItem }) => {
  const { imageUrl, name, description, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="description">{description}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(cartItems(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
