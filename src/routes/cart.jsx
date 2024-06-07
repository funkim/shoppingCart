import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} - {item.quantity} - {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
