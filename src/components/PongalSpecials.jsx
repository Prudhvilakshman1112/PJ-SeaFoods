import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARTY  = String.fromCodePoint(0x1F389);
const WAVE   = String.fromCodePoint(0x1F30A);
const CURRY  = String.fromCodePoint(0x1F35B);
const SHRIMP = String.fromCodePoint(0x1F990);
const CRAB   = String.fromCodePoint(0x1F980);
const FISH   = String.fromCodePoint(0x1F41F);
const TROPI  = String.fromCodePoint(0x1F420);
const BLOW   = String.fromCodePoint(0x1F421);

export default function PongalSpecials() {
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
          <h2 className="section-title">Pongal Specials &amp; Combos</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">Festival bundles crafted with love — freshness guaranteed</p>
        </div>
        <div className="combos-grid" ref={cardsRef}>

          <div className="combo-card">
            <div className="combo-badge">Best Seller</div>
            <div className="combo-img">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80" alt="Seafood feast" />
            </div>
            <span className="combo-icon">{PARTY}</span>
            <div className="combo-name">Pongal Festival Combo</div>
            <div className="combo-desc">Celebrate the harvest with a feast from the sea! A curated mix for the whole family.</div>
            <ul className="combo-items">
              <li className="combo-item-tag"><span>{TROPI}</span><span>Pomfret 500g</span></li>
              <li className="combo-item-tag"><span>{SHRIMP}</span><span>Prawns 500g</span></li>
              <li className="combo-item-tag"><span>{CRAB}</span><span>Crab 500g</span></li>
              <li className="combo-item-tag"><span>{FISH}</span><span>Tuna 500g</span></li>
            </ul>
            <div className="combo-price">Rs. 999 (Save Rs. 201)</div>
            <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="btn-gold" style={{display:"flex",justifyContent:"center"}}>
              <span>Order This Combo</span>
            </a>
          </div>

          <div className="combo-card">
            <div className="combo-badge">Value Pack</div>
            <div className="combo-img">
              <img src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&q=80" alt="Tiger prawns" />
            </div>
            <span className="combo-icon">{WAVE}</span>
            <div className="combo-name">Ocean Bounty Combo</div>
            <div className="combo-desc">A generous mix of the ocean finest, perfect for your weekly seafood fix.</div>
            <ul className="combo-items">
              <li className="combo-item-tag"><span>{SHRIMP}</span><span>Tiger Prawns 1kg</span></li>
              <li className="combo-item-tag"><span>{BLOW}</span><span>Lady Fish 500g</span></li>
              <li className="combo-item-tag"><span>{TROPI}</span><span>Dry Fish 250g</span></li>
            </ul>
            <div className="combo-price">Rs. 799 (Save Rs. 101)</div>
            <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="btn-gold" style={{display:"flex",justifyContent:"center"}}>
              <span>Order This Combo</span>
            </a>
          </div>

          <div className="combo-card">
            <div className="combo-badge">Andhra Special</div>
            <div className="combo-img">
              <img src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=500&q=80" alt="Andhra crab curry" />
            </div>
            <span className="combo-icon">{CURRY}</span>
            <div className="combo-name">Andhra Spice Combo</div>
            <div className="combo-desc">Hand-picked varieties best suited for traditional Andhra hot spicy preparations.</div>
            <ul className="combo-items">
              <li className="combo-item-tag"><span>{CRAB}</span><span>Mud Crab 1kg</span></li>
              <li className="combo-item-tag"><span>{FISH}</span><span>Rohu Fish 1kg</span></li>
              <li className="combo-item-tag"><span>{SHRIMP}</span><span>Prawns 500g</span></li>
            </ul>
            <div className="combo-price">Rs. 1,199 (Save Rs. 251)</div>
            <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="btn-gold" style={{display:"flex",justifyContent:"center"}}>
              <span>Order This Combo</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
