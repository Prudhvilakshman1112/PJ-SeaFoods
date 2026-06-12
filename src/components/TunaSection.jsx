import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgTunaHero    from "../assets/tuna fish for special section.jpg";
import imgTunaMarket  from "../assets/Tuna (Sura).jpg";

gsap.registerPlugin(ScrollTrigger);

const tunaFacts = [
  {
    icon: "🏆",
    title: "Premium Protein Source",
    desc: "Tuna is one of the richest sources of lean protein — packing 25g of protein per 100g, making it ideal for athletes, families, and health-conscious individuals.",
  },
  {
    icon: "❤️",
    title: "Heart-Healthy Omega-3s",
    desc: "Loaded with Omega-3 fatty acids that reduce inflammation, lower bad cholesterol, and protect against cardiovascular disease. A superfood straight from the sea.",
  },
  {
    icon: "🧠",
    title: "Brain & Nerve Health",
    desc: "Rich in DHA and EPA — essential fatty acids that boost brain function, support cognitive health, and are vital for child development.",
  },
  {
    icon: "🔬",
    title: "Vitamins & Minerals",
    desc: "Packed with Vitamin D, B12, selenium, and iron — nutrients that strengthen immunity, boost energy, and support bone health naturally.",
  },
  {
    icon: "⚖️",
    title: "Weight Management",
    desc: "Low in fat, high in protein — tuna keeps you full longer, supports healthy metabolism, and is a staple in balanced diet plans worldwide.",
  },
  {
    icon: "🌊",
    title: "Sustainably Sourced",
    desc: "Our tuna is sourced directly from traditional fishing communities along the Andhra coast — wild-caught, traceable, and delivered fresh to your table.",
  },
];

export default function TunaSection() {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const heroRef     = useRef(null);
  const factsRef    = useRef(null);
  const ctaRef      = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.set(headerRef.current, { opacity: 0, y: 60 });
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
      });

      // Hero image
      gsap.set(heroRef.current, { opacity: 0, scale: 0.93, x: 50 });
      gsap.to(heroRef.current, {
        opacity: 1, scale: 1, x: 0, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: heroRef.current, start: "top 85%" },
      });

      // Fact cards stagger
      const facts = factsRef.current?.querySelectorAll(".tuna-fact");
      if (facts) {
        gsap.set(facts, { opacity: 0, y: 45, scale: 0.96 });
        gsap.to(facts, {
          opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: factsRef.current, start: "top 82%" },
        });
      }

      // CTA
      gsap.set(ctaRef.current, { opacity: 0, y: 30 });
      gsap.to(ctaRef.current, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tuna" className="tuna-section" ref={sectionRef}>
      {/* Decorative blobs */}
      <div className="tuna-blob tuna-blob--1" />
      <div className="tuna-blob tuna-blob--2" />

      <div className="container">
        {/* Header */}
        <div className="section-header" ref={headerRef}>
          <div className="tuna-eyebrow">🐟 Our Star Catch</div>
          <h2 className="section-title tuna-title">The Mighty Tuna</h2>
          <div className="tuna-divider" />
          <p className="section-subtitle tuna-subtitle">
            PJ Seafoods is your most trusted, freshest provider of premium Tuna — straight from the Bay of Bengal
          </p>
        </div>

        {/* Hero strip */}
        <div className="tuna-hero-strip" ref={heroRef}>
          <div className="tuna-hero-img-wrap">
            <img
              src={imgTunaHero}
              alt="Fresh premium tuna"
              loading="lazy"
            />
            <div className="tuna-hero-img-overlay" />
            <div className="tuna-hero-badge">
              <span className="badge-icon">🐟</span>
              <span>Wild-Caught · Bay of Bengal</span>
            </div>
          </div>
          <div className="tuna-hero-text">
            <div className="tuna-provider-tag">Why PJ Seafoods for Tuna?</div>
            <h3 className="tuna-hero-heading">
              Your Trusted Tuna Provider — <span>Farm to Table Freshness</span>
            </h3>
            <p className="tuna-hero-desc">
              At PJ Seafoods, tuna is more than just a fish — it's our passion and pride. We work directly with experienced Andhra fishermen who hand-select the finest tuna from the deep waters of the Bay of Bengal every single day.
            </p>
            <p className="tuna-hero-desc">
              Our tuna reaches you within <strong>hours of catch</strong> — never frozen, never compromised. Whether you need it for a traditional Andhra dry fry, a spicy masala curry, or a healthy grilled meal, our tuna delivers unmatched flavor and nutrition.
            </p>
            <div className="tuna-stats">
              <div className="tuna-stat">
                <div className="tuna-stat-num">100%</div>
                <div className="tuna-stat-label">Wild-Caught</div>
              </div>
              <div className="tuna-stat">
                <div className="tuna-stat-num">Fresh</div>
                <div className="tuna-stat-label">Daily Delivery</div>
              </div>
              <div className="tuna-stat">
                <div className="tuna-stat-num">✓</div>
                <div className="tuna-stat-label">Quality Checked</div>
              </div>
            </div>
            <a
              href="https://wa.me/919985476544"
              target="_blank"
              rel="noreferrer"
              className="btn-tuna"
            >
              🐟 Order Fresh Tuna Now
            </a>
          </div>
        </div>

        {/* Facts grid */}
        <div className="tuna-facts-header">
          <h3 className="tuna-facts-title">Why Tuna Is Nature's Superfood</h3>
          <p className="tuna-facts-sub">Six powerful reasons why tuna should be on your plate every week</p>
        </div>
        <div className="tuna-facts-grid" ref={factsRef}>
          {tunaFacts.map((f, i) => (
            <div className="tuna-fact" key={i}>
              <div className="tuna-fact-icon">{f.icon}</div>
              <h4 className="tuna-fact-title">{f.title}</h4>
              <p className="tuna-fact-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA ribbon */}
        <div className="tuna-cta-ribbon" ref={ctaRef}>
          <div className="tuna-cta-text">
            <div className="tuna-cta-heading">Ready to experience the freshest Tuna in Andhra?</div>
            <div className="tuna-cta-sub">Call or WhatsApp us — we deliver tuna fresh to your doorstep daily.</div>
          </div>
          <div className="tuna-cta-actions">
            <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="btn-tuna">
              📲 WhatsApp Order
            </a>
            <a href="tel:9985476544" className="btn-tuna-outline">
              📞 9985476544
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
