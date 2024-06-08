import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [storeItems, setStoreItems] = useState([]);
  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const source = await fetch("https://fakestoreapi.com/products");
        const data = await source.json();
        console.log(data);
        setStoreItems(data);
      } catch (error) {
        console.error("Error fetching store items:", error);
      }
    }

    fetchStoreItems();
  }, []);

  return <StoreContext.Provider value={{ storeItems }}>{children}</StoreContext.Provider>;
}
