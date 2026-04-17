import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#7c3aed", "#2D5016", "#4ade80"];

function InteractionChart({ timeline }) {
  // Count each interaction type
  const counts = { Call: 0, Text: 0, Video: 0 };
  timeline.forEach(function (entry) {
    if (counts[entry.type] !== undefined) {
      counts[entry.type] = counts[entry.type] + 1;
    }
  });

  // Only include types that have at least 1 entry
  const data = [
    { name: "Text",  value: counts.Text  },
    { name: "Call",  value: counts.Call  },
    { name: "Video", value: counts.Video },
  ].filter(function (item) { return item.value > 0; });

  // Empty state
  if (data.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "64px 0", color: "#9ca3af" }}>
        <div style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "10px solid #f3f4f6",
          margin: "0 auto 20px",
        }} />
        <p style={{ fontSize: "0.875rem" }}>
          No interactions yet. Log calls, texts, or video check-ins to see stats.
        </p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="45%"
          innerRadius={80}
          outerRadius={130}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map(function (entry, index) {
            return <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />;
          })}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default InteractionChart;
