import React from "react";
import "./collection-item.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

import { cartItems } from "../../redux/actions/cartItems";

const CollectionItem = ({ item, cartItems }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => cartItems(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartItems: (item) => dispatch(cartItems(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
