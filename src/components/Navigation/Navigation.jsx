import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movie">Movie</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/payments">Payments</NavLink>
    </nav>
  );
}
