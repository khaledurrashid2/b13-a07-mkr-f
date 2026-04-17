import TimelineEntry from "./TimelineEntry";
import EmptyTimeline from "./EmptyTimeline";

function TimelineList({ entries }) {
  if (entries.length === 0) {
    return <EmptyTimeline />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {entries.map(function (entry) {
        return <TimelineEntry key={entry.id} entry={entry} />;
      })}
    </div>
  );
}

export default TimelineList;
