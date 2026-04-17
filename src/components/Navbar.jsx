import NavLogo from "./navbar/NavLogo";
import NavLinks from "./navbar/NavLinks";

function Navbar() {
  return (
    <>
      {/*
        Inject global responsive CSS rules here.
        We can't do media queries in inline styles, so we use a <style> tag.
        - On mobile (< 480px): hide nav label text, tighten padding
        - On mobile: reduce logo font size slightly
      */}
      <style>{`
        @media (max-width: 480px) {
          .nav-label { display: none; }
          .nav-link   { padding: 8px 10px !important; }
          .nav-logo   { font-size: 1.05rem !important; }
        }
      `}</style>

      <nav style={{
        backgroundColor: "white",
        borderBottom: "1px solid #f3f4f6",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}>
          <NavLogo />
          <NavLinks />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
