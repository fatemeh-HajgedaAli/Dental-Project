import { useEffect, useRef, useState } from "react";

// component-parts
import Hero from "../Hero";
import Services from "../Services";
import EmergencyDental from "../EmergencyDental";
import WhyChooseUs from "../WhyChooseUs";
import DentalTips from "../DentalTips";
import DigitalImplant from "../DigitalImplant";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";

// START
export default function Home() {
  const contactRef = useRef(null);

  const [showFloating, setShowFloating] = useState(true);

  useEffect(() => {
    const section = contactRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-200px 0px -200px 0px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <section id="hero" className="w-full">
        <Hero />
      </section>

      {/* Services */}
      <section id="services" className="w-full">
        <Services />
      </section>

      {/* Emergency Dental */}
      <section className="w-full">
        <EmergencyDental />
      </section>

      {/* Dental Tips */}
      <section id="tips" className="w-full">
        <DentalTips />
      </section>

      {/* Why Choose Us */}
      <section id="about" className="w-full">
        <WhyChooseUs />
      </section>

      {/* Digital Implant */}
      <section className="w-full">
        <DigitalImplant />
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full">
        <FAQ />
      </section>

      {/* Contact */}
      <section ref={contactRef} id="contact" className="relative w-full">
        <ContactUs />
      </section>
    </div>
  );
}
