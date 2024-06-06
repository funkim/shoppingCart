import { Item } from "../components/Items";
import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Homepage() {
  const { totalItemCount } = useContext(CartContext);
  const [itemSelection, setItemSelection] = useState([{ Item }]);

  return (
    <div className="homepageContainer">
      <h1>Welcome!</h1>
      <p>Total Items: {totalItemCount}</p>
      {itemSelection.map((item, index) => (
        <Item name={item.name} price={item.price} quantity={item.quantity} key={index} />
      ))}
    </div>
  );
}
