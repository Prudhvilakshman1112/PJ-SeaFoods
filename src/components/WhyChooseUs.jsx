import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fishermenImg from "../assets/fishermen.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: String.fromCodePoint(0x1F30A), title: "Unmatched Freshness",  desc: "Sourced daily by traditional fishing communities. From sea to plate in under 12 hours." },
  { icon: String.fromCodePoint(0x2B50),  title: "Quality & Variety",    desc: "Premium dry fishes and fresh live varieties. Hand-selected for quality and taste." },
  { icon: String.fromCodePoint(0x1F69A), title: "Deep Local Delivery",  desc: "Reaching every corner of Andhra & Telangana. Hyderabad, Vijayawada, Vizag & beyond." },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const visualRef  = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(visualRef.current, { opacity: 0, x: -60 });
      gsap.to(visualRef.current, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } });
      gsap.set(contentRef.current.children, { opacity: 0, x: 50 });
      gsap.to(contentRef.current.children, { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 73%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="why-us" ref={sectionRef}>
      <div className="container">
        <div className="why-us-inner">
          <div className="why-visual" ref={visualRef}>
            <img src={fishermenImg} alt="Traditional fishermen casting nets at sunrise" />
            <div className="why-visual-overlay" />
            <div className="why-visual-glow" />
          </div>
          <div className="why-content" ref={contentRef}>
            <div>
              <h2 className="section-title">Why Choose PJ Seafoods?</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Where the ocean meets your table — with tradition, trust, and taste.</p>
            </div>
            <div className="why-features">
              {features.map((f) => (
                <div key={f.title} className="why-feature">
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-text"><h3>{f.title}</h3><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:9985476544" className="btn-primary"><span>Call: 9985476544</span></a>
              <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="btn-gold"><span>WhatsApp Order</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
