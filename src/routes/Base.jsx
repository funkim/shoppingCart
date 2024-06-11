import { Outlet, NavLink } from "react-router-dom";
import ShoppingLogo from "../assets/shopping-cart-outline-svgrepo-com.jsx";
import Home from "../assets/home-icon-silhouette-svgrepo-com.jsx";
import Help from "../assets/helpIcon.jsx";
import { CartContext } from "../components/CartContext.jsx";
import { useContext } from "react";

export default function Layout() {
  const { totalItemCount } = useContext(CartContext);
  return (
    <div className="layout">
      <header>
        <nav>
          <NavLink to="/">
            <Home width="60" height="60" alt="Home" className="page" />
          </NavLink>

          <div className="title">
            <h1>Shopdefied</h1>
            <img src="https://cdn.icon-icons.com/icons2/2787/PNG/512/black_cat_icon_177458.png" alt="Cat Icon" />
          </div>
          <NavLink to="cart">
            <div className="itemCount">
              <p>{totalItemCount}</p>{" "}
            </div>
            <ShoppingLogo width="60" height="60" alt="Cart" className="page Cart" />
          </NavLink>
          <NavLink to="help">
            <Help width="60" height="60" alt="Help" className="page" />
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
