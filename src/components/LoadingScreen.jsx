import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const screenRef = useRef(null);
  const logoRef = useRef(null);
  const sloganRef = useRef(null);
  const anchorRef = useRef(null);
  const progressRef = useRef(null);
  const ripplesRef = useRef([]);

  useEffect(() => {
    // Ripples are independent — they loop forever on their own
    ripplesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        scale: 1 + i * 0.8 + 1,
        opacity: 0,
        duration: 2 + i * 0.4,
        ease: 'power2.out',
        repeat: -1,
        delay: i * 0.5,
      });
    });

    // Main sequence — separate from ripples so onComplete works
    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => {
        gsap.to(screenRef.current, {
          opacity: 0,
          duration: 0.7,
          delay: 0.4,
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      },
    });

    // Progress bar fills up
    tl.to(progressRef.current, { width: '100%', duration: 2.0, ease: 'power1.inOut' }, 0);

    // Anchor appears
    tl.to(anchorRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' }, 0.3);

    // Logo drops in
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'back.out(1.4)' }, 0.8);

    // Slogan types out
    tl.to(sloganRef.current, { width: '420px', duration: 1.4, ease: 'power2.inOut' }, 1.4);

    // Pause a beat then finish
    tl.to({}, { duration: 0.4 }, 3.0);

    return () => {
      tl.kill();
      gsap.killTweensOf(ripplesRef.current);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen" ref={screenRef}>
      <div className="loading-ripple-container">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="ripple-circle"
            ref={(el) => (ripplesRef.current[i] = el)}
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div
        ref={anchorRef}
        className="loading-anchor"
        style={{ opacity: 0, transform: 'translateY(-20px)' }}
      >
        &#9875;
      </div>

      <h1
        ref={logoRef}
        className="loading-logo-text"
        style={{ opacity: 0, transform: 'translateY(-60px)' }}
      >
        PJ SEAFOODS
      </h1>

      <p
        ref={sloganRef}
        className="loading-slogan"
        style={{ width: 0 }}
      >
        Fresh From The Waves To Your Home
      </p>

      <div className="loading-progress">
        <div ref={progressRef} className="loading-progress-bar" style={{ width: 0 }} />
      </div>
    </div>
  );
}
