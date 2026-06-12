import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home",             href: "#home" },
  { label: "Fresh Catch",      href: "#fresh-catch" },
  { label: "Tuna Special",     href: "#tuna" },
  { label: "Harvest Specials", href: "#pongal" },
  { label: "Contact Us",       href: "#contact", cta: true },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const headerRef                  = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0,   opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15 }
    );
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header ref={headerRef} className={"header" + (scrolled ? " scrolled" : "")}>
        <div className="top-banner">
          <span>Call Now: <a href="tel:9985476544">9985476544</a></span>
          <span>|</span>
          <span>Instagram: <a href="https://instagram.com/pj_sea_foods" target="_blank" rel="noreferrer">@pj_sea_foods</a></span>
          <span>|</span>
          <span>Personal: <a href="https://instagram.com/sailor_man_67" target="_blank" rel="noreferrer">@sailor_man_67</a></span>
          <span>|</span>
          <span>Vizag: 1 Day Delivery | Rest of India: Order 1 Day Prior</span>
        </div>
        <div className="header-inner">
          <a className="logo-wrap" href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }}>
            <div className="logo-icon">&#9875;</div>
            <div className="logo-text-wrap">
              <div className="logo-name">PJ Seafoods</div>
              <div className="logo-tagline">A People&apos;s Journey of Fresh Flavor</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="nav desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={"nav-link" + (link.cta ? " nav-cta" : "")}
                onClick={(e) => { e.preventDefault(); go(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={"hamburger-line" + (menuOpen ? " open" : "")} />
            <span className={"hamburger-line" + (menuOpen ? " open" : "")} />
            <span className={"hamburger-line" + (menuOpen ? " open" : "")} />
          </button>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN OVERLAY — rendered as a sibling, outside header ── */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              ✕
            </button>
            <div className="mobile-menu-logo">🐟 PJ Seafoods</div>
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={"mobile-nav-link" + (link.cta ? " mobile-nav-cta" : "")}
                  onClick={(e) => { e.preventDefault(); go(link.href); }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <a href="tel:9985476544" className="mobile-contact-chip">📞 9985476544</a>
              <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="mobile-contact-chip whatsapp">💬 WhatsApp</a>
              <a href="https://instagram.com/pj_sea_foods" target="_blank" rel="noreferrer" className="mobile-contact-chip">📸 @pj_sea_foods</a>
              <a href="https://instagram.com/sailor_man_67" target="_blank" rel="noreferrer" className="mobile-contact-chip">📸 @sailor_man_67</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
