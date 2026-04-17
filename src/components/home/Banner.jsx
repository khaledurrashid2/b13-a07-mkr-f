import BannerTitle from "./BannerTitle";
import AddFriendButton from "./AddFriendButton";
import SummaryCards from "./SummaryCards";

function Banner({ friends, timelineCount }) {
  return (
    <>
      <style>{`
        .banner-section {
          padding: 56px 20px 48px;
          background-color: #f5f7f4;
        }
        @media (max-width: 600px) {
          .banner-section {
            padding: 36px 16px 32px;
          }
        }
      `}</style>
      <section className="banner-section">
        <BannerTitle />
        <AddFriendButton />
        <SummaryCards friends={friends} timelineCount={timelineCount} />
      </section>
    </>
  );
}

export default Banner;
