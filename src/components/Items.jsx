import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";

export function Item({ name = "Placeholder", price = "0.00", description = "Placeholder", image, index }) {
  const { addItemToCart, removeFromCart, cartItems } = useContext(CartContext);
  const item = cartItems.find((i) => i.name === name) || { quantity: 0 };
  const [inputValue, setInputValue] = useState(item.quantity);

  useEffect(() => {
    setInputValue(item.quantity);
  }, [item.quantity]);

  const onQuantityChange = (event) => {
    const value = event.target.value;
    const newQuantity = value === "" ? 0 : parseInt(value, 10);

    if (!isNaN(newQuantity)) {
      if (newQuantity !== inputValue) {
        if (newQuantity > item.quantity) {
          for (let i = 0; i < newQuantity - item.quantity; i++) {
            addItemToCart({ name, price, image, description });
          }
        } else if (newQuantity < item.quantity) {
          for (let i = 0; i < item.quantity - newQuantity; i++) {
            removeFromCart({ name, price, image, description });
          }
        }
      }
    }
    setInputValue(value);
  };
  const increaseCount = () => {
    addItemToCart({ name, price, image, description });
  };

  const decreaseCount = () => {
    if (item.quantity > 0) {
      removeFromCart({ name, price, image, description });
    }
  };
  return (
    <div className="itemContainer" key={index}>
      <img src={image} alt={name} />
      <div className="info">
        <p>${price}</p>
        <h3>{name}</h3>
      </div>
      <div className="addToCart">
        <button onClick={decreaseCount}>-</button>
        <input type="text" value={inputValue} onChange={onQuantityChange} />
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
}
