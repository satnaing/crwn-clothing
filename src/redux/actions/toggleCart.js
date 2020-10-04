import { TOGGLE_CART_HIDDEN } from "../types";

const toggleCart = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export default toggleCart;
