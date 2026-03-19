import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home",            href: "#home" },
  { label: "Fresh Catch",     href: "#fresh-catch" },
  { label: "Pongal Specials", href: "#pongal" },
  { label: "Combos",          href: "#pongal" },
  { label: "Contact Us",      href: "#contact", cta: true },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const headerRef                  = useRef(null);

  useEffect(() => {
    // Always visible — just slide in from top
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0,   opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15 }
    );
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={headerRef} className={"header" + (scrolled ? " scrolled" : "")}>
      <div className="top-banner">
        <span>Call Now: <a href="tel:9985476544">9985476544</a></span>
        <span>|</span>
        <span>Instagram: <a href="https://instagram.com/pj_sea_foods" target="_blank" rel="noreferrer">@pj_sea_foods</a></span>
        <span>|</span>
        <span>Delivery Across Andhra &amp; Telangana</span>
      </div>
      <div className="header-inner">
        <a className="logo-wrap" href="#home" onClick={(e) => go(e, "#home")}>
          <div className="logo-icon">&#9875;</div>
          <div className="logo-text-wrap">
            <div className="logo-name">PJ Seafoods</div>
            <div className="logo-tagline">A People&apos;s Journey of Fresh Flavor</div>
          </div>
        </a>
        <nav className={"nav" + (menuOpen ? " open" : "")}>
          {menuOpen && (
            <button onClick={() => setMenuOpen(false)} style={{position:"absolute",top:"1.5rem",right:"1.5rem",background:"none",border:"2px solid #F4A821",color:"#F4A821",fontSize:"1rem",width:"40px",height:"40px",borderRadius:"8px",cursor:"pointer",fontWeight:"700"}}>X</button>
          )}
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={"nav-link" + (link.cta ? " nav-cta" : "")} onClick={(e) => go(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      </div>
    </header>
  );
}
