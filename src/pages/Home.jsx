// Home-Page
import React from "react";
// component-parts
import Hero from "./Hero";
import Services from "./Services";
// start
export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="mb-1">
        <Hero />
      </div>
      {/* services */}
      <div className="">
        <Services />
      </div>
      {/* About Us  */}
    </>
  );
}
