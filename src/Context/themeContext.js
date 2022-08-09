import { useContext, createContext, useReducer } from "react";
import { reducer } from "../reducer/cartReducer";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialState = {
    color: "white",
    "background-color": "black",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
