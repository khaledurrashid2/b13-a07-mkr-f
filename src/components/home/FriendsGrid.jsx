import FriendCard from "./FriendCard";

function FriendsGrid({ friends }) {
  return (
    <section style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 20px 64px" }}>
      <>
        {/* Responsive grid: 2 cols on mobile, 4 cols on desktop */}
        <style>{`
          .friends-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
          @media (max-width: 600px) {
            .friends-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
          }
        `}</style>
      </>

      <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#111827", marginBottom: "20px" }}>
        Your Friends
      </h2>

      <div className="friends-grid">
        {friends.map(function (friend) {
          return <FriendCard key={friend.id} friend={friend} />;
        })}
      </div>
    </section>
  );
}

export default FriendsGrid;
