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

import FloatingAppointmentButton from "../FloatingAppointmentButton";

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
      <Hero />

      {/* Services */}
      <Services />

      {/* Emergency */}
      <EmergencyDental />

      {/* Dental Tips */}
      <DentalTips />

      {/* Why choose */}
      <WhyChooseUs />

      {/* Digital Implant */}
      <DigitalImplant />

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <div ref={contactRef} className="relative">
        <ContactUs />
      </div>
    </>
  );
}
