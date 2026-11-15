import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logoImg from "../assets/rudhra-logo.jpg";

const navLinks = [
  { label: "Home",             href: "#home" },
  { label: "Our Brand",        href: "#brand" },
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

        <div className="header-inner">
          <a className="logo-wrap" href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }}>
            <div className="logo-icon"><img src={logoImg} alt="Rudhra Sea Foods logo" /></div>
            <div className="logo-text-wrap">
              <div className="logo-name">Rudhra Sea Foods</div>
              <div className="logo-tagline">Seafood That Makes Your Taste Divine!</div>
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
            <div className="mobile-menu-logo">🔱 Rudhra Sea Foods</div>
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
              <a href="tel:6301081921" className="mobile-contact-chip">📞 63010 81921</a>
              <a href="https://wa.me/916301081921" target="_blank" rel="noreferrer" className="mobile-contact-chip whatsapp">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
