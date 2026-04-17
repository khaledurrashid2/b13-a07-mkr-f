// Home Page
//-----------------------

import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import Banner from "../components/home/Banner";
import FriendsGrid from "../components/home/FriendsGrid";
import LoadingSpinner from "../components/ui/LoadingSpinner";

// The Home page - fetches friends data and shows Banner + Friends Grid
function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { timeline } = useApp();

  // Fetch friends from the public/friends.json file when the page loads
  useEffect(function () {
    fetch("/friends.json")
      .then(function (response) { return response.json(); })
      .then(function (data) {
        setFriends(data);
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Banner friends={friends} timelineCount={timeline.length} />
      <FriendsGrid friends={friends} />
    </div>
  );
}

export default Home;
