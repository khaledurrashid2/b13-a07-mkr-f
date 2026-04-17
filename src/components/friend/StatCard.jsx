function StatCard({ value, label }) {
  return (
    <>
      <style>{`
        .stat-card-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
        }
        @media (max-width: 600px) {
          .stat-card-value {
            font-size: 1.2rem;
          }
        }
      `}</style>
      <div style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px 16px",
        border: "1px solid #f0f0f0",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        textAlign: "center",
      }}>
        <div className="stat-card-value">{value}</div>
        <div style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "6px" }}>{label}</div>
      </div>
    </>
  );
}

export default StatCard;
