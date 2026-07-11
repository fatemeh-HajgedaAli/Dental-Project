import React from "react";

export default function ImplantBackground() {
  return (
    <>
      {/* 🌌 Main Background  */}
      <div className="absolute inset-0 -z-30  
      bg-gradient-to-b from-[#f8fafc]
       via-white to-[#f0f9ff]" />

      {/* 🔮 Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-20
          w-[420px]
          h-[720px]
          rounded-full
          bg-sky-100/30
          blur-[140px]
          -z-20
          pointer-events-none
        "
      />
    </>
  );
}
