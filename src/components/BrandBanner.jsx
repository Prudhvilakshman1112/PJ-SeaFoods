import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImg from "../assets/rudhra-logo.jpg";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: "🚚",
    title: "We Export All States",
    desc: "Premium seafood safely packed and shipped across India with guaranteed freshness.",
  },
  {
    icon: "📦",
    title: "Bulk & Event Orders",
    desc: "Catering for weddings, family functions, parties, and bulk restaurant supplies.",
  },
  {
    icon: "🏠",
    title: "Vizag Doorstep Delivery",
    desc: "Quick doorstep delivery right to your home anywhere in Visakhapatnam.",
  },
  {
    icon: "🔥",
    title: "Spicy Homemade Dishes",
    desc: "Fresh & cooked seafood: Crabs, Prawns, Fish, Squid, spicy Masala Fry & authentic Curries!",
  },
];

export default function BrandBanner() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const visualRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.set(headerRef.current, { opacity: 0, y: 40 });
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
      });

      // Visual banner frame animation
      gsap.set(visualRef.current, { opacity: 0, scale: 0.94, y: 30 });
      gsap.to(visualRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: visualRef.current, start: "top 85%" },
      });

      // Info side animation
      if (infoRef.current) {
        gsap.set(infoRef.current.children, { opacity: 0, y: 25 });
        gsap.to(infoRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: infoRef.current, start: "top 82%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="brand" className="brand-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <div className="brand-eyebrow">🔱 OUR BRAND IDENTITY</div>
          <h2 className="section-title brand-title">Rudhra Sea Foods</h2>
          <div className="gold-divider" />
          <p className="section-subtitle brand-subtitle">
            Seafood That Makes Your Taste Divine &middot; Experience The Fire &amp; Freshness!
          </p>
        </div>

        {/* Banner Content Grid */}
        <div className="brand-grid">
          {/* Visual Banner Frame */}
          <div className="brand-visual-col" ref={visualRef}>
            <div className="brand-banner-frame">
              <img
                src={bannerImg}
                alt="Rudhra Sea Foods - Official Brand Banner"
                className="brand-banner-image"
                loading="lazy"
              />
              <div className="brand-banner-overlay" />
              <div className="brand-banner-glow" />
            </div>
            <div className="brand-badge-strip">
              <span className="brand-chip">📍 Only in Vizag</span>
              <span className="brand-chip">🌊 Bay of Bengal Catch</span>
              <span className="brand-chip">🌶️ Homemade Spice</span>
            </div>
          </div>

          {/* Brand Highlights & Info */}
          <div className="brand-info-col" ref={infoRef}>
            <div className="brand-hero-card">
              <span className="brand-accent-tag">The Divine Taste of the Sea</span>
              <h3 className="brand-callout-heading">
                Experience The Fire! Spicy Homemade Seafood Delivered to Your Home
              </h3>
              <p className="brand-callout-desc">
                From the deep sacred waters of the Bay of Bengal to your dining plate,
                <strong> Rudhra Sea Foods </strong> brings you uncompromised freshness, premium
                hand-selected catch, and fiery traditional Andhra flavors cooked with passion.
              </p>
            </div>

            <div className="brand-features-grid">
              {highlights.map((item, index) => (
                <div key={index} className="brand-feature-card">
                  <div className="brand-feature-icon">{item.icon}</div>
                  <div className="brand-feature-body">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="brand-actions-row">
              <a
                href="https://wa.me/916301081921?text=Hi%20Rudhra%20Sea%20Foods%2C%20I%20would%20like%20to%20order"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                <span>💬 WhatsApp Order</span>
              </a>
              <a href="tel:6301081921" className="btn-primary">
                <span>📞 Call: 63010 81921</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
