import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../assets/hero_bg.png";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const sloganRef = useRef(null);
  const badgeRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.3")
        .to(sloganRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.4)" }, "-=0.3");

      gsap.to(bgRef.current, {
        yPercent: 18, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-bg" ref={bgRef} style={{ backgroundImage: "url(" + heroBg + ")" }} />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow" ref={eyebrowRef}>Premium Fresh Seafood Delivery</div>

        <h1 className="hero-title" ref={titleRef}>
          PJ Seafoods
          <span className="highlight">Fresh From The</span>
          <span style={{ color: "#ADE8F4" }}>Waves To Your Home</span>
        </h1>

        <p className="hero-slogan" ref={sloganRef}>
          A people&apos;s journey of fresh flavor — connecting traditional fishing
          communities with your dining table across Andhra &amp; Telangana.
        </p>

        <div className="hero-delivery-badge" ref={badgeRef}>
          <span>&#128666; Delivering Across Andhra &amp; Telangana</span>
        </div>

        <div className="hero-actions" ref={actionsRef}>
          <a href="#fresh-catch" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#fresh-catch")?.scrollIntoView({ behavior: "smooth" }); }}>
            <span>Shop Fresh Catch</span>
          </a>
          <a href="tel:9985476544" className="btn-gold">
            <span>&#128222; Order Now: 9985476544</span>
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse"><div className="scroll-dot" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
