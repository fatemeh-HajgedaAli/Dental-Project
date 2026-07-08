import React from "react";
import PatientImage from "../../assets/images/emergencyDental/bgPng.png";

export default function EmergencyBackground() {
  return (
    <div
      className="
        absolute 
        inset-0 
        w-full 
        h-full 
        pointer-events-none 
        overflow-hidden 
        z-0 
        select-none
        /* گرادیان سه مرحله‌ای فوق‌العاده جذاب و عمیق */
        bg-gradient-to-b 
        from-blue-900 
        via-slate-950 
        to-blue-950
      "
    >
      {/* =========================================================
          Background circles
         ========================================================= */}

      {/* Main circle behind patient head */}
      <div
        className="
          absolute 
          top-[50%] 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2 
          w-[420px] 
          h-[420px] 
          sm:w-[480px] 
          sm:h-[480px] 
          md:w-[600px] 
          md:h-[600px] 
          rounded-full 
          border-[14px] 
          border-sky-300/20
          opacity-80
        "
      />

      {/* Soft animated circle */}
      <div
        className="
          absolute 
          top-[50%] 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2 
          w-[400px] 
          h-[400px] 
          sm:w-[700px] 
          sm:h-[700px] 
          md:w-[900px] 
          md:h-[900px] 
          rounded-full 
          border-[2px] 
          border-sky-200/20
          animate-[pulse_4s_ease-in-out_infinite]
        "
      />

      {/* =========================================================
          Patient image
         ========================================================= */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[560px]
          sm:w-[460px]
          md:w-[480px]
          lg:w-[540px]
          h-[75%]
          flex
          items-end
          justify-center
          z-10
        "
      >
        <img
          src={PatientImage}
          alt="Tooth Pain Emergency Patient"
          className="
            w-full
            h-full
            object-contain
            object-bottom
            filter-none
          "
        />
      </div>
    </div>
  );
}
