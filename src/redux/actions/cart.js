import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from "../types";

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const cartItems = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
