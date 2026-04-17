function CheckInButton({ type, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        padding: "20px 12px",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        background: "white",
        cursor: "pointer",
        fontSize: "0.875rem",
        fontWeight: "500",
        color: "#374151",
        flex: 1,
        transition: "background 0.15s",
      }}
      onMouseEnter={function(e) { e.currentTarget.style.backgroundColor = "#f9fafb"; }}
      onMouseLeave={function(e) { e.currentTarget.style.backgroundColor = "white"; }}
    >
      {icon}
      {type}
    </button>
  );
}

export default CheckInButton;
