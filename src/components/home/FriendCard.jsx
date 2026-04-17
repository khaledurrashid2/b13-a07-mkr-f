import { useNavigate } from "react-router-dom";
import StatusBadge from "../ui/StatusBadge";
import TagList from "../ui/TagList";

function getStatusKey(friend) {
  if (friend.status === "overdue") return "overdue";
  const daysLeft = friend.goal - friend.days_since_contact;
  if (daysLeft <= 3) return "almost-due";
  return "active";
}

function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={function () { navigate("/friend/" + friend.id); }}
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "24px 16px",
        cursor: "pointer",
        border: "1px solid #f0f0f0",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={function(e) { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"; }}
      onMouseLeave={function(e) { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
    >
      <img
        src={friend.picture}
        alt={friend.name}
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px"
        }}
        onError={function (e) {
          e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(friend.name) + "&background=2D5016&color=fff";
        }}
      />
      <h3 style={{ fontWeight: "600", fontSize: "0.95rem", color: "#111827", marginBottom: "4px" }}>
        {friend.name}
      </h3>
      <p style={{ fontSize: "0.78rem", color: "#9ca3af", marginBottom: "10px" }}>
        {friend.days_since_contact}d ago
      </p>
      <div style={{ marginBottom: "10px" }}>
        <TagList tags={friend.tags} />
      </div>
      <StatusBadge status={getStatusKey(friend)} />
    </div>
  );
}

export default FriendCard;
