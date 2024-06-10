import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [storeItems, setStoreItems] = useState([]);
  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const source = await fetch("https://fakestoreapi.com/products");
        const data = await source.json();
        const menClothing = data.filter((index) => index.category === "men's clothing");
        const jewelery = data.filter((index) => index.category === "jewelery");
        const electronics = data.filter((index) => index.category === "electronics");
        const womenClothing = data.filter((index) => index.category === "women's clothing");
        setStoreItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching store items:", error);
      }
    }

    fetchStoreItems();
  }, []);

  return <StoreContext.Provider value={{ storeItems }}>{children}</StoreContext.Provider>;
}
