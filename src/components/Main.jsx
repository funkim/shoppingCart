import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./CartContext";
import { StoreProvider } from "./StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
