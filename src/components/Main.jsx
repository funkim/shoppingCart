import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
