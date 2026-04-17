function TimelineFilter({ filter, setFilter, sort, setSort, search, setSearch }) {
  const selectStyle = {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "0.875rem",
    color: "#374151",
    cursor: "pointer",
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>

      {/* Filter dropdown */}
      <div style={{ position: "relative" }}>
        <select
          value={filter}
          onChange={function (e) { setFilter(e.target.value); }}
          style={{ ...selectStyle, paddingRight: "32px" }}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
        <span style={{
          position: "absolute", right: "10px", top: "50%",
          transform: "translateY(-50%)", pointerEvents: "none",
          color: "#6b7280", fontSize: "0.75rem",
        }}>▾</span>
      </div>

      {/* Sort dropdown */}
      <select
        value={sort}
        onChange={function (e) { setSort(e.target.value); }}
        style={selectStyle}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
      </select>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or type..."
        value={search}
        onChange={function (e) { setSearch(e.target.value); }}
        style={{
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "8px 16px",
          fontSize: "0.875rem",
          color: "#374151",
          outline: "none",
          flex: 1,
          minWidth: "160px",
        }}
      />
    </div>
  );
}

export default TimelineFilter;
