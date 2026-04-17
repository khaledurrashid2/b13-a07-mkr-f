// Renders a list of tag pills
function TagList({ tags }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
      {tags.map(function (tag) {
        return (
          <span key={tag} style={{
            fontSize: "0.7rem",
            backgroundColor: "#f3f4f6",
            color: "#4b5563",
            padding: "2px 8px",
            borderRadius: "9999px",
            textTransform: "uppercase",
            fontWeight: "500",
            letterSpacing: "0.04em"
          }}>
            {tag}
          </span>
        );
      })}
    </div>
  );
}

export default TagList;
