import { useState } from "react";
import { useApp } from "../context/AppContext";
import TimelineFilter from "../components/timeline/TimelineFilter";
import TimelineList from "../components/timeline/TimelineList";

function Timeline() {
  const { timeline } = useApp();
  const [filter, setFilter] = useState("All");
  const [sort,   setSort]   = useState("newest");
  const [search, setSearch] = useState("");

  // Step 1: copy the array so we don't mutate state
  let entries = [...timeline];

  // Step 2: filter by interaction type
  if (filter !== "All") {
    entries = entries.filter(function (e) { return e.type === filter; });
  }

  // Step 3: filter by search text
  if (search !== "") {
    entries = entries.filter(function (e) {
      return e.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  // Step 4: sort by date
  if (sort === "oldest") {
    entries = entries.reverse();
  }

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#111827", marginBottom: "24px" }}>
        Timeline
      </h1>
      <TimelineFilter
        filter={filter} setFilter={setFilter}
        sort={sort}     setSort={setSort}
        search={search} setSearch={setSearch}
      />
      <TimelineList entries={entries} />
    </div>
  );
}

export default Timeline;
