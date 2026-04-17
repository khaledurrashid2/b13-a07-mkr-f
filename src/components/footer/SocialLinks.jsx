function SocialIcon({ href, children }) {
  return (
    <a href={href} style={{
      width: "40px",
      height: "40px",
      backgroundColor: "#1e3a0f",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textDecoration: "none",
    }}>
      {children}
    </a>
  );
}

function SocialLinks() {
  return (
    <div style={{ textAlign: "center", marginBottom: "32px" }}>
      <p style={{ color: "#86efac", fontSize: "0.875rem", marginBottom: "12px" }}>Social Links</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>

        <SocialIcon href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </SocialIcon>

        <SocialIcon href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </SocialIcon>

        <SocialIcon href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </SocialIcon>

      </div>
    </div>
  );
}

export default SocialLinks;
