// This page shows the stats

import { useApp } from "../context/AppContext";
import ChartCard from "../components/stats/ChartCard";

function Stats() {
  const { timeline } = useApp();

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#111827", marginBottom: "32px" }}>
        Friendship Analytics
      </h1>
      <ChartCard timeline={timeline} />
    </div>
  );
}

export default Stats;
