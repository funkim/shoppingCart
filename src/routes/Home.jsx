import { NavLink, Outlet } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import { StoreContext, ShownSelection } from "../components/StoreContext";
import Women from "./Categories/Women";

export default function Homepage() {
  const { totalItemCount } = useContext(CartContext);
  const { allItems } = useContext(StoreContext);
  const [itemSelection, setItemSelection] = useState([]);

  useEffect(() => {
    setItemSelection(allItems);
  }, [allItems]);

  return (
    <div>
      <nav>
        <NavLink to="/">All </NavLink>
        <NavLink to="Tech">Technology</NavLink>
        <NavLink to="Men">Men's Clothing</NavLink>
        <NavLink to="Women">Women's Clothing</NavLink>
        <NavLink to="Jewelery">Jewelery</NavLink>
      </nav>
      <div className="homepageContainer">
        <h1>Welcome!</h1>
        <p>Total Items: {totalItemCount}</p>
        <Outlet />
      </div>
    </div>
  );
}
