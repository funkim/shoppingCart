import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export function Item({ name = "Placeholder", price = "0.00", description = "Placeholder", index }) {
  const { addItemToCart, removeFromCart, cartItems } = useContext(CartContext);
  const item = cartItems.find((i) => i.name === name) || { quantity: 0 };

  const incrementCount = () => {
    addItemToCart({ name, price });
  };

  const decrementCount = () => {
    if (item.quantity > 0) {
      removeFromCart({ name, price });
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
        <p>{item.quantity}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}
