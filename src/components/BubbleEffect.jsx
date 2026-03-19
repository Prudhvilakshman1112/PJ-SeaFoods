import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BubbleEffect({ active }) {
  const containerRef = useRef(null);
  const tweens = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    tweens.current.forEach((t) => t.kill());
    tweens.current = [];
    container.innerHTML = "";

    if (!active) return;

    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      const size = Math.random() * 18 + 6;
      bubble.style.cssText = "width:" + size + "px;height:" + size + "px;left:" + (Math.random() * 100) + "%;";
      container.appendChild(bubble);

      const tween = gsap.fromTo(
        bubble,
        { y: 0, opacity: 0.85 },
        {
          y: -(Math.random() * 100 + 60),
          x: (Math.random() - 0.5) * 40,
          opacity: 0,
          duration: Math.random() * 1.2 + 0.8,
          delay: Math.random() * 0.5,
          ease: "power1.out",
          onComplete: () => bubble.remove(),
        }
      );
      tweens.current.push(tween);
    }

    return () => {
      tweens.current.forEach((t) => t.kill());
      container.innerHTML = "";
    };
  }, [active]);

  return <div className="bubble-container" ref={containerRef} />;
}
