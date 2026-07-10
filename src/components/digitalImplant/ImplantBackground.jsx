import React from "react";

export default function ImplantBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-50 via-white to-sky-50" />

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-20
          w-[520px]
          h-[520px]
          rounded-full
          bg-sky-400/10
          blur-[140px]
          -z-20
          pointer-events-none
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-52
          bottom-0
          w-[620px]
          h-[620px]
          rounded-full
          bg-cyan-300/10
          blur-[170px]
          -z-20
          pointer-events-none
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[450px]
          h-[450px]
          rounded-full
          bg-sky-300/10
          blur-[120px]
          -z-20
          pointer-events-none
        "
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-overlay
          bg-[radial-gradient(circle_at_center,#0ea5e9_1px,transparent_1px)]
          [background-size:28px_28px]
          -z-10
        "
      />
    </>
  );
}
