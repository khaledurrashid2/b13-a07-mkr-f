// Shows a single summary number with a label
function SummaryCard({ value, label }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      border: "1px solid #f3f4f6",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: "2rem", fontWeight: "700", color: "#111827", lineHeight: 1.2 }}>{value}</div>
      <div style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "6px" }}>{label}</div>
    </div>
  );
}

export default SummaryCard;
