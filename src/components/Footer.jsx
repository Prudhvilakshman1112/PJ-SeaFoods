import logoImg from "../assets/rudhra-logo.jpg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" fill="#0B1A2E" />
        </svg>
      </div>
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
              <img src={logoImg} alt="Rudhra Sea Foods" className="footer-logo-img" />
              <div className="footer-name">Rudhra Sea Foods</div>
            </div>
            <div className="footer-tagline">&quot;Seafood That Makes Your Taste Divine!&quot;</div>
            <div className="footer-delivery-badge"><span>&#128666;</span><span>Delivering to Every Corner of India</span></div>
            <p style={{ fontSize:"0.78rem", color:"#A8D8EA", lineHeight:1.7, maxWidth:"300px", marginTop:"0.5rem" }}>
              Fresh &amp; cooked seafood — Crabs, Prawns, Fish, Squid, Masala Fry &amp; Curries! From coastal fishing communities to your family table.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="tel:6301081921">&#128222; 63010 81921</a></li>
              <li><a href="https://wa.me/916301081921" target="_blank" rel="noreferrer">&#128172; WhatsApp Us</a></li>
              <li style={{ color:"#A8D8EA", fontSize:"0.8rem" }}>&#128336; We are open 24 hrs</li>
            </ul>
            <div style={{ marginTop:"1.2rem", padding:"0.75rem 1rem", background:"rgba(13,79,139,0.15)", border:"1px solid rgba(13,79,139,0.35)", borderRadius:"10px", fontSize:"0.76rem", color:"#A8D8EA", lineHeight:1.6 }}>
              <span style={{ color:"#A8D8EA" }}>Vizag: 1 Day Delivery &middot; Rest of India: Order 1 day before</span>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">&copy; {year} <span className="footer-copy-brand">Rudhra Sea Foods</span>. All rights reserved.</div>
          <div className="footer-wave-tag">&#127754; Fresh From The Waves To Your Home</div>
        </div>
      </div>
    </footer>
  );
}
