import Cart from "../routes/cart";
import { CartContext } from "./CartContext";
import { useState, useContext } from "react";
export function Item({ name = "Placeholder", price = "0.00", description = "Placeholder", quantity, onIncrement, onDecrement, index }) {
  const [itemCount, setItemCount] = useState(0);
  const { addItemToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addItemToCart(item);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  quantity = itemCount;

  const incrementCount = () => {
    setItemCount(itemCount + 1);
    onIncrement();
    handleAddToCart(Item);
  };

  const decrementCount = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      onDecrement();
      handleRemoveFromCart(Item);
    }
  };
  return (
    <div className="itemContainer" key={index}>
      <img src="https://m.media-amazon.com/images/I/71nVIiWEcgL._AC_SY200_.jpg" alt="item" />
      <div className="itemInfo">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <div className="count">
        <p>{quantity}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}
