import TimelineIcon from "./TimelineIcon";

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function TimelineEntry({ entry }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      border: "1px solid #f0f0f0",
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <TimelineIcon type={entry.type} />
      </div>

      <div>
        <p style={{ fontSize: "0.875rem", color: "#111827", margin: 0 }}>
          <span style={{ fontWeight: "600" }}>{entry.type}</span>
          {" "}
          <span style={{ color: "#6b7280" }}>with {entry.friendName}</span>
        </p>
        <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: "3px 0 0" }}>
          {formatDate(entry.date)}
        </p>
      </div>
    </div>
  );
}

export default TimelineEntry;
