import { NavLink } from "react-router-dom";

// On mobile (small screens) we hide the text label and show only the icon.
// We use a <style> tag injected once to handle this with a CSS media query,
// since inline styles cannot target media queries directly.
function NavItem({ to, label, icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      style={function ({ isActive }) {
        return {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "8px 14px",
          borderRadius: "6px",
          fontSize: "0.875rem",
          fontWeight: "500",
          textDecoration: "none",
          transition: "all 0.15s",
          backgroundColor: isActive ? "#2D5016" : "transparent",
          color: isActive ? "#ffffff" : "#4b5563",
          whiteSpace: "nowrap",
        };
      }}
    >
      {icon}
      {/* This span is hidden on mobile via the injected CSS class */}
      <span className="nav-label">{label}</span>
    </NavLink>
  );
}

export default NavItem;
