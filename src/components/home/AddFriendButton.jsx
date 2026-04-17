function AddFriendButton() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
      <button style={{
        backgroundColor: "#2D5016",
        color: "white",
        padding: "10px 24px",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "0.9rem",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>+</span>
        Add a Friend
      </button>
    </div>
  );
}

export default AddFriendButton;
