import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgBundle from "../assets/Prawns.jpg";

gsap.registerPlugin(ScrollTrigger);

const WAVE   = String.fromCodePoint(0x1F30A);
const CURRY  = String.fromCodePoint(0x1F35B);
const SHRIMP = String.fromCodePoint(0x1F990);
const CRAB   = String.fromCodePoint(0x1F980);
const FISH   = String.fromCodePoint(0x1F41F);
const TROPI  = String.fromCodePoint(0x1F420);
const BLOW   = String.fromCodePoint(0x1F421);
const LEAF   = String.fromCodePoint(0x1F33F);

export default function HarvestSpecials() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const cardsRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
      });
      const cards = cardsRef.current?.querySelectorAll(".combo-card");
      if (cards) {
        gsap.set(cards, { opacity: 0, y: 55, scale: 0.96 });
        gsap.to(cards, {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15,
          ease: "back.out(1.3)",
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pongal" className="pongal-specials" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <h2 className="section-title">June Fresh Harvest Specials</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">Seasonal bundles of the finest catch — freshness guaranteed, delivered to your door</p>
        </div>
        <div className="combos-grid" ref={cardsRef}>

          <div className="combo-card">
            <div className="combo-badge">Best Seller</div>
            <div className="combo-img">
              <img src={imgBundle} alt="Seafood feast" />
            </div>
            <span className="combo-icon">{WAVE}</span>
            <div className="combo-name">Ocean Harvest Bundle</div>
            <div className="combo-desc">A curated summer mix for the whole family — sourced fresh from Bay of Bengal shores this June.</div>
            <ul className="combo-items">
              <li className="combo-item-tag"><span>{TROPI}</span><span>Pomfret 500g</span></li>
              <li className="combo-item-tag"><span>{SHRIMP}</span><span>Prawns 500g</span></li>
              <li className="combo-item-tag"><span>{TROPI}</span><span>Dry Fish 250g</span></li>
              <li className="combo-item-tag"><span>{FISH}</span><span>Tuna 500g</span></li>
            </ul>
            <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="btn-gold" style={{display:"flex",justifyContent:"center"}}>
              <span>Order This Bundle</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
