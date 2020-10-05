import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../types";
import { addItemToCart } from "../utils/cart.utils";

const Initial_State = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
