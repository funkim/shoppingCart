import { Outlet, NavLink } from "react-router-dom";
import ShoppingLogo from "../assets/shopping-cart-outline-svgrepo-com.jsx";
import Home from "../assets/home-icon-silhouette-svgrepo-com.jsx";
import Help from "../assets/helpIcon.jsx";

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <NavLink to="/">
            <Home width="40" height="40" alt="Home" className="page" />
          </NavLink>
          <NavLink to="cart">
            <ShoppingLogo width="40" height="40" alt="Cart" className="page" />
          </NavLink>
          <NavLink to="help">
            <Help width="40" height="40" alt="Help" className="page" />
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
