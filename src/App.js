import "./App.css";
import { Home } from "../src/pages/Home";
import { Login } from "../src/pages/Login/Login";
import { Checkout } from "../src/pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import { useCart } from "../src/Context/cartContext";
import { useEffect } from "react";
import { auth } from "./firebase";
function App() {
  const {
    state: { cart },
    dispatch,
  } = useCart();
  // console.log(cart);
  // piece of code that runs based on a given condition

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [cart]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
