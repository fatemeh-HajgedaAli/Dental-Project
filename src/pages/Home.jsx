// Home-Page
import React from "react";
// component-parts
import Hero from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import EmergencyDental from "./EmergencyDental";
// start
export default function Home() {
  return (
    <>
      {/* Hero */}
      <div>
        <Hero />
      </div>
      {/* EmergencyDental */}
      <div className="">
        <EmergencyDental />
      </div>
      {/* About Us  */}
      {/* {/* <div>
        <AboutUs />
      </div> */}
      {/* services  */}
      <div>
        <Services />
      </div>
    </>
  );
}
