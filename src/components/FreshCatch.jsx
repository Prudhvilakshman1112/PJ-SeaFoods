import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id:1, name:"Silver Pomfret", desc:"Delicate, melt-in-mouth white fish. Ideal for fry, curry, or steaming. Bay of Bengal fresh.", price:"From Rs. 350 per kg", image:"https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=80" },
  { id:2, name:"Tiger Prawns",   desc:"Juicy tiger prawns - perfect for biryani, fry, or masala. A coastal favorite from Andhra shores.", price:"From Rs. 480 per kg", image:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80" },
  { id:3, name:"Mud Crab",       desc:"Thick-clawed mud crabs, wild-caught. Rich in flavor for curry, pepper masala, or steamed.", price:"From Rs. 600 per kg", image:"https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80" },
  { id:4, name:"Tuna (Sura)",   desc:"Bold, meaty tuna. Perfect for traditional Andhra-style dry fry and spicy curries.", price:"From Rs. 280 per kg", image:"https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600&q=80" },
  { id:5, name:"Pandugappa (Dry Fish)", desc:"Sun-dried coastal fish — a traditional Andhra delicacy. Deep flavor, premium quality.", price:"From Rs. 250 per kg", image:"https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" },
  { id:6, name:"Lady Fish (Bochu)", desc:"Andhra favorite — the slender, tender Lady Fish. Best for spicy roast or masala fry.", price:"From Rs. 220 per kg", image:"https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&q=80" },
];

export default function FreshCatch() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const gridRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
      gsap.to(headerRef.current, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
      });
      const cards = gridRef.current?.querySelectorAll(".product-card");
      if (cards) {
        gsap.set(cards, { opacity: 0, y: 55 });
        gsap.to(cards, {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="fresh-catch" className="fresh-catch" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <h2 className="section-title">Today&apos;s Fresh Catch</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">Sourced daily from traditional fishing communities of Andhra</p>
        </div>
        <div className="products-grid" ref={gridRef}>
          {products.map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  );
}
