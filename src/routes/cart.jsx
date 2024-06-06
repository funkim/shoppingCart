import { Link } from "react-router-dom";
import Item from "./item";
import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([Item]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const exampleItem = {
    id: 1,
    title: "Sample Item",
    description: "This is a sample item",
    price: "$10",
    quantity: 1,
  };

  useState(() => {
    addItemToCart(exampleItem);
  }, []);
  const ShowCart = ({ item }) => {
    return (
      <div className="itemInCart">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
        <p>{item.quantity}</p>
      </div>
    );
  };
  console.log(cartItems);
  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <ShowCart key={item.id} item={item} />
      ))}
    </div>
  );
}
