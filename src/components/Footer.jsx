import FooterBrand from "./footer/FooterBrand";
import SocialLinks from "./footer/SocialLinks";
import FooterBottom from "./footer/FooterBottom";

function Footer() {
  return (
    // width: 100% + no side margin ensures it always spans full screen width
    <footer style={{
      backgroundColor: "#2D5016",
      color: "white",
      marginTop: "64px",
      width: "100%",
    }}>
      <div style={{
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "56px 20px",
        boxSizing: "border-box",
      }}>
        <FooterBrand />
        <SocialLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
