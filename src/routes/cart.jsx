import { Link } from "react-router-dom";
import Item from "./item";
export default function Cart() {
  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <Link to="/item/1" element={<Item />}>
        {"Item"}
      </Link>
    </div>
  );
}
