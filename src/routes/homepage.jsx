import { Item } from "../components/Items";
import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";

export default function Homepage() {
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [itemSelection, setItemSelection] = useState([Item]);
  const { cartItems } = useContext(CartContext);

  const incrementTotalCount = () => setTotalItemCount(totalItemCount + 1);
  const decrementTotalCount = () => {
    if (totalItemCount > 0) {
      setTotalItemCount(totalItemCount - 1);
    }
  };

  return (
    <div className="homepageContainer">
      <h1>Welcome!</h1>
      <p>Total Items: {totalItemCount}</p>
      {itemSelection.map((item, index) => (
        <Item
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onIncrement={incrementTotalCount}
          onDecrement={decrementTotalCount}
          key={index}
        />
      ))}
    </div>
  );
}
