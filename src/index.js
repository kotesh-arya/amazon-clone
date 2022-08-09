import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Context/cartContext";
import { ThemeProvider } from "./Context/themeContext";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThemeProvider>
      <CartProvider >
      <App />
      </CartProvider>
    </ThemeProvider>
  </Router>
);

// reportWebVitals();
