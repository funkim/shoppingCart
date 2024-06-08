import logo from "../assets/ZKZg.gif";
import { Item } from "../components/Items";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import { StoreContext } from "../components/StoreContext";

export default function Homepage() {
  const { totalItemCount } = useContext(CartContext);
  const { storeItems } = useContext(StoreContext);
  const [itemSelection, setItemSelection] = useState([]);

  useEffect(() => {
    setItemSelection(storeItems);
  }, [storeItems]);

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
          <div className="loading">
            {" "}
            <img src={logo} alt="loading.." />
          </div>
        )}
      </div>
    </div>
  );
}
