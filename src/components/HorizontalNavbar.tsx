// import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo"
import { NavLink } from "react-router-dom";

function HorizontalNavbar() {
  return (
    <div className="horizontal-navbar">
      <Logo />
      <nav className="navbar-top">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </nav>
    </div>
  );
}

export default HorizontalNavbar;
