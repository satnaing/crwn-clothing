import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
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
