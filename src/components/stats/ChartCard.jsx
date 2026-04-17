import InteractionChart from "./InteractionChart";

function ChartCard({ timeline }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      border: "1px solid #f0f0f0",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      padding: "24px",
    }}>
      <h2 style={{ fontSize: "0.875rem", fontWeight: "500", color: "#6b7280", marginBottom: "24px" }}>
        By Interaction Type
      </h2>
      <InteractionChart timeline={timeline} />
    </div>
  );
}

export default ChartCard;
