import React, { useState } from "react";
import ClinicBackground from "../components/aboutClinic/aboutClinicPart/ClinicBackground";
import AboutTeamSection from "../components/aboutClinic/AboutTeamSection";
import ClinicGallary from "../components/aboutClinic/aboutClinicPart/ClinicGallary";
import AboutClinicHeader from "../components/aboutClinic/AboutClinicHeader";
import { clinicGallaryData } from "../components/aboutClinic/aboutClinicPart/clinic.data";

export default function AboutUs() {
  const defaultBg = clinicGallaryData?.[0]?.background || "";
  const [bg, setBg] = useState(defaultBg);

  const handleMouseLeave = () => {
    if (clinicGallaryData?.[0]) {
      setBg(clinicGallaryData[0].background);
    }
  };

  if (!clinicGallaryData || clinicGallaryData.length === 0) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <section className="relative w-full" dir="rtl">
      <AboutClinicHeader />
      {/* BACKGROUND */}
      <ClinicBackground bgImage={bg} />

      <div className="container mx-auto px-4 relative z-10">
        {/* ⚡ گالری را به عنوان فرزند پاس می‌دهیم */}
        <AboutTeamSection>
          <ClinicGallary
            items={clinicGallaryData}
            onHover={setBg}
            onLeave={handleMouseLeave}
          />
        </AboutTeamSection>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 max-w-6xl mx-auto"></div>
      </div>
    </section>
  );
}
