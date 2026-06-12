import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fishingWomanImg from "../assets/fishing_woman.png";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);
  const [form, setForm]           = useState({ name:"", phone:"", inquiry:"", time:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent("Hello PJ Seafoods!\nName: " + form.name + "\nPhone: " + form.phone + "\nInquiry: " + (form.inquiry || "General") + "\nTime: " + (form.time || "Any"));
    window.open("https://wa.me/919985476544?text=" + msg, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current,  { opacity: 0, x: -55 });
      gsap.set(rightRef.current, { opacity: 0, x:  55 });
      gsap.to(leftRef.current,  { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } });
      gsap.to(rightRef.current, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: "3rem" }}>
          <h2 className="section-title">Need Help Ordering?</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">We&apos;re just a call away — fresh seafood at your doorstep!</p>
        </div>
        <div className="contact-inner">
          <div className="contact-woman-wrap" ref={leftRef}>
            <img src={fishingWomanImg} alt="Fisherwoman with fresh seafood basket" />
            <div className="contact-woman-overlay" />
            <div className="contact-woman-tag">
              <span className="tag-icon">&#x1F41F;</span>
              <div className="tag-text">
                <strong>Fresh Every Day</strong>
                <span>Traditional fishing community — Andhra &amp; Telangana</span>
              </div>
            </div>
          </div>
          <div ref={rightRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="e.g. Ravi Kumar" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="e.g. 9876543210" value={form.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>What are you looking for? (Optional)</label>
                <textarea name="inquiry" rows={3} placeholder="e.g. 2kg Pomfret, Pongal Combo..." value={form.inquiry} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Preferred Delivery Time (Optional)</label>
                <select name="time" value={form.time} onChange={handleChange}>
                  <option value="">Select time slot</option>
                  <option value="Morning (7am-10am)">Morning (7am–10am)</option>
                  <option value="Afternoon (11am-2pm)">Afternoon (11am–2pm)</option>
                  <option value="Evening (4pm-7pm)">Evening (4pm–7pm)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" style={{ width:"100%", justifyContent:"center", padding:"0.9rem" }}>
                <span>{submitted ? "Sent via WhatsApp!" : "Send Order via WhatsApp"}</span>
              </button>
            </form>
            <div className="contact-cta-row">
              <a href="tel:9985476544" className="contact-phone-cta">
                <div className="phone-cta-icon">&#128222;</div>
                <div className="phone-cta-text">
                  <div className="cta-label">Direct Order — Ask for Sailor Man</div>
                  <div className="cta-number">9985476544</div>
                </div>
              </a>
              <div className="social-links">
                <a href="https://instagram.com/pj_sea_foods" target="_blank" rel="noreferrer" className="social-link instagram">
                  <span>&#128247;</span><span>@pj_sea_foods</span>
                </a>
                <a href="https://instagram.com/sailor_man_67" target="_blank" rel="noreferrer" className="social-link instagram">
                  <span>&#128247;</span><span>@sailor_man_67</span>
                </a>
                <a href="https://wa.me/919985476544" target="_blank" rel="noreferrer" className="social-link whatsapp">
                  <span>&#128172;</span><span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
