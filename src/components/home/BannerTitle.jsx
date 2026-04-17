function BannerTitle() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        fontWeight: "800",
        color: "#111827",
        marginBottom: "12px",
        lineHeight: 1.2
      }}>
        Friends to keep close in your life
      </h1>
      <p style={{
        color: "#6b7280",
        fontSize: "0.95rem",
        maxWidth: "420px",
        margin: "0 auto"
      }}>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
    </div>
  );
}

export default BannerTitle;
