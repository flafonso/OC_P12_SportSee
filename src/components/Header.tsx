// import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Logo />
      <nav className="header__navbar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </nav>
    </div>
  );
}

export default Header;
