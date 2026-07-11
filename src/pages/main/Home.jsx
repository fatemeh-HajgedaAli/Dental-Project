// Home-Page
// component-parts
import Hero from "../Hero";
import Services from "../Services";
import EmergencyDental from "../EmergencyDental";
import Contact from "../../components/contactUs/AppointmentForm";
import WhyChooseUs from "../WhyChooseUs";
import DentalTips from "../DentalTips";
import DigitalImplant from "../DigitalImplant";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";
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
      {/* Dental Tips */}
      <div className="">
        {" "}
        <DentalTips />
      </div>
      {/* ehy-choose-us */}
      <div className="">
        <WhyChooseUs />
      </div>
      {/* digital implant */}
      <div className="">
        <DigitalImplant />
      </div>
      {/* FAQ */}
      <FAQ />
      {/* contact-us */}
      <div className="">
        <ContactUs />
      </div>
    </>
  );
}
