import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { StoreProvider } from "./StoreContext";
import Homepage from "../routes/Home";
import Cart from "../routes/Cart";
import NotFound from "../routes/Error";
import Layout from "../routes/Layout";
import HelpLayout from "../routes/HelpLayout";
import Women from "../routes/Categories/Women";
import Tech from "../routes/Categories/Technology";
import Jewelery from "../routes/Categories/Jewelery";
import Men from "../routes/Categories/Men";
import All from "../routes/Categories/All";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Homepage />}>
        <Route index element={<All />} />
        <Route path="Women" element={<Women />} />
        <Route path="Tech" element={<Tech />} />
        <Route path="Men" element={<Men />} />
        <Route path="Jewelery" element={<Jewelery />} />
      </Route>
      <Route path="Cart" element={<Cart />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" />
        <Route path="contact" />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </StoreProvider>
  </React.StrictMode>
);
