import { createSelector } from "reselect";

const selectCart = (state) => state.Cart;

export const selectCartItems = createSelector(
  [selectCart],
  (Cart) => Cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (Cart) => Cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQty, cartItem) =>
      accumalatedQty + cartItem.quantity * cartItem.price,
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
