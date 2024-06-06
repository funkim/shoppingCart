import { Link, Route, Routes } from "react-router-dom";
import Homepage from "../routes/homepage";
import Cart from "../routes/cart";
import NotFound from "../routes/errorPage";
import ShoppingLogo from "../assets/shopping-cart-outline-svgrepo-com.jsx";
import Home from "../assets/home-icon-silhouette-svgrepo-com.jsx";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <Home width="40" height="40" alt="Home" />
          </Link>
          <Link to="/cart">
            <ShoppingLogo width="40" height="40" alt="Cart" />
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart">
          <Route index element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
