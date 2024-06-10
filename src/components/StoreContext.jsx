import { createContext, useState, useEffect } from "react";
import { Item } from "./Items";
import logo from "../assets/ZKZg.gif";

export const StoreContext = createContext();

export function ShownSelection({ category }) {
  return (
    <div className="itemSelection">
      {category.length > 2 ? (
        category.map((item) => (
          <Item
            name={item.title}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
            image={item.image}
            description={item.description}
            quantityChange={item.quantityChange}
          />
        ))
      ) : (
        <div className="loading">
          {" "}
          <img src={logo} alt="loading.." />
        </div>
      )}
    </div>
  );
}

export function StoreProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const [menItems, setMenItems] = useState([]);
  const [womenItems, setWomenItems] = useState([]);
  const [techItems, setTechItems] = useState([]);
  const [jeweleryItems, setJewlerytems] = useState([]);
  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const source = await fetch("https://fakestoreapi.com/products");
        const data = await source.json();
        const menClothing = data.filter((index) => index.category === "men's clothing");
        const jewelery = data.filter((index) => index.category === "jewelery");
        const electronics = data.filter((index) => index.category === "electronics");
        const womenClothing = data.filter((index) => index.category === "women's clothing");
        setAllItems(data);
        setMenItems(menClothing);
        setWomenItems(womenClothing);
        setTechItems(electronics);
        setJewlerytems(jewelery);
        console.log(data);
      } catch (error) {
        console.error("Error fetching store items:", error);
      }
    }

    fetchStoreItems();
  }, []);

  return <StoreContext.Provider value={{ allItems, menItems, womenItems, techItems, jeweleryItems }}>{children}</StoreContext.Provider>;
}
