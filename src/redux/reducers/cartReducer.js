import { TOGGLE_CART_HIDDEN } from "../types";

const Initial_State = {
  hidden: true,
};

const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
