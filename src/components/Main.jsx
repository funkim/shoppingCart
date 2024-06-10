import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./CartContext";
import { StoreProvider } from "./StoreContext";
import Homepage from "../routes/Home";
import Cart from "../routes/Cart";
import NotFound from "../routes/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Homepage />} />
      <Route path="cart">
        <Route index element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <CartProvider>
          <App />
          <RouterProvider router={router} />
        </CartProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
