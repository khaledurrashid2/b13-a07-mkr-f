function FooterBottom() {
  return (
    <>
      <style>{`
        .footer-bottom {
          border-top: 1px solid #3d6b1f;
          padding-top: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #86efac;
          gap: 12px;
        }
        .footer-links {
          display: flex;
          gap: 16px;
        }
        @media (max-width: 480px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>

      <div className="footer-bottom">
        <span>© 2026 KeenKeeper. All rights reserved.</span>
        <div className="footer-links">
          <a href="#" style={{ color: "#86efac", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ color: "#86efac", textDecoration: "none" }}>Terms of Service</a>
          <a href="#" style={{ color: "#86efac", textDecoration: "none" }}>Cookies</a>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
