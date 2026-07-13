// Home.jsx

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
// floatingBTN
import FloatingAppointmentButton from "../FloatingAppointmentButton";
// START
export default function Home() {
  const contactRef = useRef(null);

  const [showFloating, setShowFloating] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);

        console.log("CONTACT:", entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-200px 0px -200px 0px",
      },
    );

    const section = contactRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <FloatingAppointmentButton visible={showFloating} />
      {/* Hero */}
      <element id="hero">
        <Hero />
      </element>

      {/* Services */}
      <element id="services">
        <Services />
      </element>

      {/* Emergency */}
      <EmergencyDental />

      {/* Dental Tips */}
      <element id="tips">
        <DentalTips />
      </element>

      {/* Why choose */}
      <element id="about">
        <WhyChooseUs />
      </element>

      {/* Digital Implant */}
      <DigitalImplant />

      {/* FAQ */}
      <element id="faq">
        <FAQ />
      </element>

      {/* Contact */}
      <element ref={contactRef} className="relative" id="contact">
        <ContactUs />
      </element>
    </>
  );
}
