import { NavLink, Outlet } from "react-router-dom";
export default function HelpLayout() {
  return (
    <div className="helpLayout">
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed natus temporibus velit, ut nisi deleniti ratione provident optio
          quibusdam nulla unde aspernatur iure! Explicabo earum porro voluptatum fuga eos?
        </p>
        <NavLink to="contact">Contact Us </NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia eligendi, asperiores voluptates id eaque magni fugiat, nostrum aperiam
          accusantium voluptas tempora dolorum minima culpa! Magni quibusdam voluptatibus quo a.
        </p>
      </nav>
      <Outlet />
    </div>
  );
}
