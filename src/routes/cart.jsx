import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Cart() {
  const { cartItems, clearCart } = useContext(CartContext);

  const cartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

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
      <h3> Your total is : ${cartTotal()}</h3>
      <button onClick={clearCart}>Checkout</button>
    </div>
  );
}
