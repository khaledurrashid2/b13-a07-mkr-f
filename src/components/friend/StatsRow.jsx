import StatCard from "./StatCard";

function StatsRow({ friend }) {
  const dueDate = new Date(friend.next_due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {/* 3-col on desktop, 1-col on mobile */}
      <style>{`
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 600px) {
          .stats-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
        }
      `}</style>
      <div className="stats-row">
        <StatCard value={friend.days_since_contact} label="Days Since Contact" />
        <StatCard value={friend.goal}               label="Goal (Days)"        />
        <StatCard value={dueDate}                   label="Next Due"           />
      </div>
    </>
  );
}

export default StatsRow;
