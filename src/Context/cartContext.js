import { useContext, createContext, useReducer } from "react";
import { reducer } from "../reducer/cartReducer";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    user: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
