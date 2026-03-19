import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FreshCatch from './components/FreshCatch';
import PongalSpecials from './components/PongalSpecials';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      // Safety fallback — always reveal site after 5s max
      const fallback = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
      }, 5000);
      return () => clearTimeout(fallback);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => ScrollTrigger.refresh(), 300);
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        className="site-wrapper"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        <Header />
        <main>
          <HeroSection />
          <FreshCatch />
          <PongalSpecials />
          <WhyChooseUs />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
