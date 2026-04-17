function ActionButton({ label, icon, color, borderBottom }) {
  return (
    <button style={{
      width: "100%",
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: color || "#374151",
      background: "none",
      border: "none",
      borderBottom: borderBottom ? "1px solid #f3f4f6" : "none",
      cursor: "pointer",
      textAlign: "left",
    }}>
      {icon}
      {label}
    </button>
  );
}

function ActionButtons() {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      border: "1px solid #f0f0f0",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      overflow: "hidden",
    }}>
      <ActionButton
        label="Snooze 2 Weeks"
        borderBottom={true}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        }
      />
      <ActionButton
        label="Archive"
        borderBottom={true}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="21 8 21 21 3 21 3 8" />
            <rect x="1" y="3" width="22" height="5" />
            <line x1="10" y1="12" x2="14" y2="12" />
          </svg>
        }
      />
      <ActionButton
        label="Delete"
        color="#ef4444"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        }
      />
    </div>
  );
}

export default ActionButtons;
