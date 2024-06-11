import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Homepage() {
  const { totalItemCount } = useContext(CartContext);

  return (
    <div className="store">
      <nav className="categories">
        <NavLink to="/">
          <input type="button" value="All" />{" "}
        </NavLink>
        <NavLink to="Tech">
          <input type="button" value="Technology" />{" "}
        </NavLink>
        <NavLink to="Men">
          <input type="button" value="Men's Clothing" />{" "}
        </NavLink>
        <NavLink to="Women">
          <input type="button" value="Women's Clothing" />{" "}
        </NavLink>
        <NavLink to="Jewelery">
          <input type="button" value="Jewelery" />{" "}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
