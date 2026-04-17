// Shows a colored badge based on the friend's status
function StatusBadge({ status }) {
  let backgroundColor, color, label;

  if (status === "overdue") {
    backgroundColor = "#fde8e8";
    color = "#c53030";
    label = "Overdue";
  } else if (status === "almost-due") {
    backgroundColor = "#fef3c7";
    color = "#92400e";
    label = "Almost Due";
  } else {
    backgroundColor = "#1a3a15";
    color = "#ffffff";
    label = "On-Track";
  }

  return (
    <span style={{
      fontSize: "0.72rem",
      padding: "3px 10px",
      borderRadius: "9999px",
      fontWeight: "600",
      backgroundColor,
      color,
      display: "inline-block"
    }}>
      {label}
    </span>
  );
}

export default StatusBadge;
