export const getSubTotal = (cart) => {
  return cart.reduce((amount, item) => {
    amount += item.price;
    return amount;
  }, 0);
};
export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}
