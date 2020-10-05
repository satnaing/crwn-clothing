import { createSelector } from "reselect";

const selectCart = (state) => state.Cart;

export const selectCartItems = createSelector(
  [selectCart],
  (Cart) => Cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity,
      0
    )
);

// state: {
//     cart: {
//         cartItems: [---],
//         hidden: true
//     },
//     user: {
//         currentUser: {---}
//     }
// }
