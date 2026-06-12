import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";

import imgPomfret  from "../assets/Silver Pomfret.jpg";
import imgPrawns   from "../assets/Prawns.jpg";
import imgCrab     from "../assets/Mud Crab.jpg";
import imgTuna     from "../assets/Tuna (Sura).jpg";
import imgDryFish  from "../assets/Dry Fish.jpg";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id:1, name:"Silver Pomfret",  desc:"Delicate, melt-in-mouth white fish. Ideal for fry, curry, or steaming. Bay of Bengal fresh.",      image: imgPomfret  },
  { id:2, name:"Prawns",          desc:"Juicy, fresh prawns — perfect for biryani, fry, or masala. A coastal favorite from Andhra shores.", image: imgPrawns   },
  { id:3, name:"Mud Crab",        desc:"Thick-clawed mud crabs, wild-caught. Rich in flavor for curry, pepper masala, or steamed.",          image: imgCrab     },
  { id:4, name:"Tuna (Sura)",     desc:"Bold, meaty tuna. Perfect for traditional Andhra-style dry fry and spicy curries.",                  image: imgTuna     },
  { id:5, name:"Dry Fish",        desc:"Sun-dried coastal fish — a traditional Andhra delicacy. Deep flavor, premium quality.",               image: imgDryFish  },
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
