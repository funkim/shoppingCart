import { createContext, useState } from "react";
import { Item } from "./Items";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    setTotalItemCount(totalItemCount + 1);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i));
      } else {
        return prevItems.filter((i) => i.name !== item.name);
      }
    });
    setTotalItemCount(totalItemCount - 1);
  };

  return <CartContext.Provider value={{ cartItems, addItemToCart, removeFromCart, totalItemCount }}>{children}</CartContext.Provider>;
}
