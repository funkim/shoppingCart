import { Link, Route, Routes, NavLink, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "../routes/Home.jsx";
import Cart from "../routes/Cart.jsx";
import NotFound from "../routes/Error.jsx";
import ShoppingLogo from "../assets/shopping-cart-outline-svgrepo-com.jsx";
import Home from "../assets/home-icon-silhouette-svgrepo-com.jsx";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <Home width="40" height="40" alt="Home" className="page" />
          </NavLink>
          <NavLink to="cart">
            <ShoppingLogo width="40" height="40" alt="Cart" className="page" />
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="cart">
          <Route index element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
