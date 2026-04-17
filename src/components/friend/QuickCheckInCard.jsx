import CheckInButton from "./CheckInButton";

function CallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

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
