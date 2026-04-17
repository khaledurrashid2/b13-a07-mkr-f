import instagramIcon from "../../assets/instagram.png";
import facebookIcon  from "../../assets/facebook.png";
import twitterIcon   from "../../assets/twitter.png";

function SocialIcon({ href, icon, alt }) {
  return (
    <a href={href} style={{
      width: "40px",
      height: "40px",
      backgroundColor: "#1e3a0f",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
    }}>
      <img src={icon} alt={alt} width={18} height={18} />
    </a>
  );
}

function SocialLinks() {
  return (
    <div style={{ textAlign: "center", marginBottom: "32px" }}>
      <p style={{ color: "#86efac", fontSize: "0.875rem", marginBottom: "12px" }}>Social Links</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <SocialIcon href="#" icon={instagramIcon} alt="Instagram" />
        <SocialIcon href="#" icon={facebookIcon}  alt="Facebook"  />
        <SocialIcon href="#" icon={twitterIcon}   alt="Twitter"   />
      </div>
    </div>
  );
}

export default SocialLinks;