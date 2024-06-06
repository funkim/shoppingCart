import { Item } from "../components/Items";
import { useState } from "react";

export default function Homepage() {
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [itemList, setItemList] = useState([{ name: "test", price: "0.00", quantity: 0 }]);

  const incrementTotalCount = () => setTotalItemCount(totalItemCount + 1);
  const decrementTotalCount = () => {
    if (totalItemCount > 0) {
      setTotalItemCount(totalItemCount - 1);
    }
  };

  const addToList = (item) => {
    setItemList((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="homepageContainer">
      <h1>Welcome!</h1>
      <p>Total Items: {totalItemCount}</p>
      {itemList.map((item, index) => (
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
