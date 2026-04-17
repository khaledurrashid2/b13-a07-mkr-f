import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      textAlign: "center",
      padding: "0 24px",
    }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "800", color: "#2D5016", lineHeight: 1, marginBottom: "16px" }}>
        404
      </h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "12px" }}>
        Page Not Found
      </h2>
      <p style={{ color: "#9ca3af", fontSize: "0.875rem", maxWidth: "300px", marginBottom: "32px", lineHeight: 1.6 }}>
        Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={function () { navigate("/"); }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#2D5016",
          color: "white",
          padding: "10px 24px",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "0.9rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
