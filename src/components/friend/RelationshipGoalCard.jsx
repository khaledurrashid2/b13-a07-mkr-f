function RelationshipGoalCard({ goal }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "20px 24px",
      border: "1px solid #f0f0f0",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <h3 style={{ fontWeight: "600", fontSize: "1rem", color: "#111827" }}>Relationship Goal</h3>
        <button style={{
          fontSize: "0.78rem",
          border: "1px solid #e5e7eb",
          padding: "5px 12px",
          borderRadius: "6px",
          background: "white",
          cursor: "pointer",
          color: "#374151",
        }}>
          Edit
        </button>
      </div>
      <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
        Connect every <strong>{goal} days</strong>
      </p>
    </div>
  );
}

export default RelationshipGoalCard;
