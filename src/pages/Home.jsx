// Home-Page
import React from "react";
// component-parts
import Hero from "./Hero";
import Services from "./Services";
import DigitalImplant from "./DigitalImplant";
import EmergencyDental from "./EmergencyDental";
import Contact from "../components/contactSection/BookingTarget";
import WhyChooseUs from "./WhyChooseUs";
import DentalTips from "./DentalTips";
// start
export default function Home() {
  return (
    <>
      {/* Hero */}
      <div>
        <Hero />
      </div>

      {/* services  */}
      <div>
        <Services />
      </div>

      {/* EmergencyDental */}
      <div>
        <EmergencyDental />
      </div>
      {/* digitalImplant */}
      <div className="">
        <DigitalImplant />
      </div>
      {/* ehy-choose-us */}
      <div className="">
        <WhyChooseUs />
      </div>
      {/* Dental Tips */}
      <DentalTips />
    </>
  );
}
