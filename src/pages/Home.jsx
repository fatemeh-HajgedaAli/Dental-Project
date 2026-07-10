// Home-Page
// component-parts
import Hero from "./Hero";
import Services from "./Services";
import EmergencyDental from "./EmergencyDental";
import WhyChooseUs from "./WhyChooseUs";
import DentalTips from "./DentalTips";
import DigitalImplant from "./DigitalImplant";
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
      <div className="">
        <DigitalImplant />
      </div>
    </>
  );
}
