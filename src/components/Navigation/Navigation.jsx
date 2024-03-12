import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";

const activeLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>
      <NavLink to="/movie" className={activeLink}>
        Movie
      </NavLink>
      <NavLink to="/profile" className={activeLink}>
        Profile
      </NavLink>
      <NavLink to="/payments" className={activeLink}>
        Payments
      </NavLink>
    </nav>
  );
}
