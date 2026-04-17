import FriendAvatar from "./FriendAvatar";
import StatusBadge from "../ui/StatusBadge";
import TagList from "../ui/TagList";

function FriendInfoCard({ friend }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "28px 20px",
      border: "1px solid #f0f0f0",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      textAlign: "center",
    }}>
      <FriendAvatar picture={friend.picture} name={friend.name} />

      <h2 style={{ fontWeight: "700", fontSize: "1.1rem", color: "#111827", marginBottom: "8px" }}>
        {friend.name}
      </h2>

      <div style={{ marginBottom: "8px" }}>
        <StatusBadge status={friend.status === "overdue" ? "overdue" : "active"} />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <TagList tags={friend.tags} />
      </div>

      <p style={{ fontSize: "0.875rem", color: "#6b7280", fontStyle: "italic", marginBottom: "6px" }}>
        "{friend.bio}"
      </p>
      <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>Preferred: email</p>
    </div>
  );
}

export default FriendInfoCard;
