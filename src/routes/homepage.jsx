import { Item } from "../components/Items";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";

export default function Homepage() {
  const { totalItemCount } = useContext(CartContext);
  const [itemSelection, setItemSelection] = useState([{ Item }]);

  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const source = await fetch("https://fakestoreapi.com/products");
        const data = await source.json();
        console.log(data);
        setItemSelection(data);
      } catch (error) {
        console.error("Error fetching store items:", error);
      }
    }

    fetchStoreItems();
  }, []);
  return (
    <div className="homepageContainer">
      <h1>Welcome!</h1>
      <p>Total Items: {totalItemCount}</p>

      <div className="itemSelection">
        {itemSelection.length > 2 ? (
          itemSelection.map((item) => (
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
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
