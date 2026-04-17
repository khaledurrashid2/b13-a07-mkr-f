import { NavLink } from "react-router-dom";

function NavLogo() {
  return (
    <NavLink to="/" style={{ textDecoration: "none", color: "#111827", flexShrink: 0 }}>
      {/* className="nav-logo" is targeted by the media query in Navbar.jsx */}
      <span className="nav-logo" style={{ fontWeight: "300", fontSize: "1.2rem" }}>Keen</span>
      <span className="nav-logo" style={{ fontWeight: "700", fontSize: "1.2rem" }}>Keeper</span>
    </NavLink>
  );
}

export default NavLogo;
