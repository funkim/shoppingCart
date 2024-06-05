import { useState } from "react";

export default function Homepage() {
  const [totalItemCount, setTotalItemCount] = useState(0);

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
      <Item name="Sample Item" price="10.00" onIncrement={incrementTotalCount} onDecrement={decrementTotalCount} />
    </div>
  );
}

function Item({ name = "Placeholder", price = "0.00", description = "Placeholder", onIncrement, onDecrement }) {
  const [itemCount, setItemCount] = useState(0);

  const incrementCount = () => {
    setItemCount(itemCount + 1);
    onIncrement();
  };

  const decrementCount = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      onDecrement();
    }
  };

  return (
    <div className="itemContainer">
      <img src="https://m.media-amazon.com/images/I/71nVIiWEcgL._AC_SY200_.jpg" alt="item" />
      <div className="itemInfo">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <div className="count">
        <p>{itemCount}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}
