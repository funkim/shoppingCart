import { createContext, useState } from "react";
import { Item } from "./Items";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemToRemove.id));
  };
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const value = {
    cartItems,
    addItemToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
