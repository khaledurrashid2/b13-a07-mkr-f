import SummaryCard from "./SummaryCard";

function SummaryCards({ friends, timelineCount }) {
  const totalFriends  = friends.length;
  const onTrack       = friends.filter(function (f) { return f.status === "active";  }).length;
  const needAttention = friends.filter(function (f) { return f.status === "overdue"; }).length;

  return (
    <>
      {/* Responsive grid: 2 cols on mobile, 4 cols on desktop */}
      <style>{`
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 860px;
          margin: 32px auto 0;
        }
        @media (max-width: 600px) {
          .summary-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="summary-grid">
        <SummaryCard value={totalFriends}      label="Total Friends"            />
        <SummaryCard value={onTrack}           label="On Track"                 />
        <SummaryCard value={needAttention}     label="Need Attention"           />
        <SummaryCard value={timelineCount}     label="Interactions This Month"  />
      </div>
    </>
  );
}

export default SummaryCards;
