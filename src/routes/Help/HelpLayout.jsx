import { NavLink, Outlet } from "react-router-dom";
export default function HelpLayout() {
  return (
    <div className="helpLayout">
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
