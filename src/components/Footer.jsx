export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" fill="#013D5A" />
        </svg>
      </div>
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
              <div style={{ width:44, height:44, background:"linear-gradient(135deg,#00B4D8,#0077B6)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid #F4A821", fontSize:"1.3rem", color:"#fff" }}>
                &#9875;
              </div>
              <div className="footer-name">PJ Seafoods</div>
            </div>
            <div className="footer-tagline">&quot;A people&apos;s journey of fresh flavor&quot;</div>
            <div className="footer-delivery-badge"><span>&#128666;</span><span>Delivery Across Andhra &amp; Telangana</span></div>
            <p style={{ fontSize:"0.78rem", color:"#90E0EF", lineHeight:1.7, maxWidth:"300px", marginTop:"0.5rem" }}>
              PJ stands for People&apos;s Journey. From coastal fishing communities to your family table — fresh seafood with love.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="tel:9985476544">&#128222; 9985476544</a></li>
              <li><a href="https://instagram.com/pj_sea_foods" target="_blank" rel="noreferrer">&#128247; @pj_sea_foods</a></li>
              <li><a href="https://instagram.com/sailor_man_67" target="_blank" rel="noreferrer">&#128247; @sailor_man_67</a></li>
              <li><a href="https://wa.me/919985476544" target="_blank" rel="noreferrer">&#128172; WhatsApp Us</a></li>
              <li style={{ color:"#90E0EF", fontSize:"0.8rem" }}>&#128336; Open 6am – 9pm, All Days</li>
            </ul>
            <div style={{ marginTop:"1.2rem", padding:"0.75rem 1rem", background:"rgba(0,180,216,0.15)", border:"1px solid rgba(0,180,216,0.35)", borderRadius:"10px", fontSize:"0.76rem", color:"#ADE8F4", lineHeight:1.6 }}>
              &#127758; Hyderabad &middot; Vijayawada &middot; Vizag<br />
              <span style={{ color:"#90E0EF" }}>Tirupati &middot; Guntur &middot; All of Andhra &amp; Telangana</span>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">&copy; {year} <span className="footer-copy-brand">PJ Seafoods</span>. All rights reserved.</div>
          <div className="footer-wave-tag">&#127754; Fresh From The Waves To Your Home</div>
        </div>
      </div>
    </footer>
  );
}
