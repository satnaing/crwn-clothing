import { ADD_ITEM } from "../types";

export const cartItems = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
