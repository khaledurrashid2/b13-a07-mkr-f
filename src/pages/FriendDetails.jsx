import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useApp } from "../context/AppContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import FriendInfoCard from "../components/friend/FriendInfoCard";
import ActionButtons from "../components/friend/ActionButtons";
import StatsRow from "../components/friend/StatsRow";
import RelationshipGoalCard from "../components/friend/RelationshipGoalCard";
import QuickCheckInCard from "../components/friend/QuickCheckInCard";

function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addTimelineEntry } = useApp();

  useEffect(function () {
    fetch("/friends.json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        const found = data.find(function (f) { return f.id === parseInt(id); });
        setFriend(found);
        setLoading(false);
      });
  }, [id]);

  function handleCheckIn(type) {
    addTimelineEntry(type, friend.name);
    const messages = {
      Call:  "📞 Call logged with "       + friend.name,
      Text:  "💬 Text logged with "       + friend.name,
      Video: "🎥 Video call logged with " + friend.name,
    };
    toast.success(messages[type], { position: "top-center", duration: 3000 });
  }

  if (loading) return <LoadingSpinner />;

  if (!friend) {
    return (
      <div style={{ textAlign: "center", padding: "120px 0", color: "#6b7280" }}>
        Friend not found.
      </div>
    );
  }

  return (
    <>
      {/*
        Layout:
        - Desktop: two columns side by side (1fr 2fr)
        - Mobile:  single column, stacked top-to-bottom
        On mobile the FriendInfoCard goes full width at the top,
        then ActionButtons, then all the right-column cards below.
      */}
      <style>{`
        .details-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "32px 20px" }}>
        <div className="details-grid">

          {/* Left column — profile card + action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <FriendInfoCard friend={friend} />
            <ActionButtons />
          </div>

          {/* Right column — stats, goal, check-in */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <StatsRow friend={friend} />
            <RelationshipGoalCard goal={friend.goal} />
            <QuickCheckInCard onCheckIn={handleCheckIn} />
          </div>

        </div>
      </div>
    </>
  );
}

export default FriendDetails;
