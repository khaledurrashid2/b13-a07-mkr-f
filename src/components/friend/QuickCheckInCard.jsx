import CheckInButton from "./CheckInButton";
import callIcon  from "../../assets/call.png";
import textIcon  from "../../assets/text.png";
import videoIcon from "../../assets/video.png";

function CallIcon()  { return <img src={callIcon}  alt="Call"  width={24} height={24} />; }
function TextIcon()  { return <img src={textIcon}  alt="Text"  width={24} height={24} />; }
function VideoIcon() { return <img src={videoIcon} alt="Video" width={24} height={24} />; }

function QuickCheckInCard({ onCheckIn }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "20px 24px",
      border: "1px solid #f0f0f0",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <h3 style={{ fontWeight: "600", fontSize: "1rem", color: "#111827", marginBottom: "16px" }}>
        Quick Check-In
      </h3>
      <div style={{ display: "flex", gap: "12px" }}>
        <CheckInButton type="Call"  icon={<CallIcon />}  onClick={function () { onCheckIn("Call");  }} />
        <CheckInButton type="Text"  icon={<TextIcon />}  onClick={function () { onCheckIn("Text");  }} />
        <CheckInButton type="Video" icon={<VideoIcon />} onClick={function () { onCheckIn("Video"); }} />
      </div>
    </div>
  );
}

export default QuickCheckInCard;