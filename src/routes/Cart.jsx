import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Cart() {
  const { cartItems, clearCart, addItemToCart, removeFromCart } = useContext(CartContext);

  const onQuantityChange = (name, value) => {
    const item = cartItems.find((i) => i.name === name);
    const newQuantity = value === "" ? 0 : parseInt(value, 10);

    if (!isNaN(newQuantity)) {
      if (newQuantity > item.quantity) {
        for (let i = 0; i < newQuantity - item.quantity; i++) {
          addItemToCart(item);
        }
      } else if (newQuantity < item.quantity) {
        for (let i = 0; i < item.quantity - newQuantity; i++) {
          removeFromCart(item);
        }
      }
    }
  };
  const cartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="image">
                <img src={item.image} />
              </div>
              <div className="info">
                {item.name} - ${item.price} <input type="text" value={item.quantity} onChange={(e) => onQuantityChange(item.name, e.target.value)} />{" "}
              </div>
              <div className="description">{item.description}</div>
              {console.log(item)}
            </li>
          ))}
        </ul>
      )}
      <h3> Your total is : ${cartTotal()}</h3>
      <button onClick={clearCart}>Checkout</button>
    </div>
  );
}
