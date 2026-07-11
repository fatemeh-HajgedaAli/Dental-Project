import React from "react";
import doctorImg from "../../assets/images/contactUs/DoctorOne.png";

export default function ContactBackground({ children }) {
  return (
    <section
      className="
      relative
      overflow-hidden
      w-full
      min-h-[420px]
      md:min-h-[520px]
      lg:min-h-[700px]
      flex
      items-center
      justify-center
      bg-[#f7f9fc]
    "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          md:bg-top
          lg:bg-center
          scale-105
          transition-all
          duration-700
        "
        style={{
          backgroundImage: `url(${doctorImg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/35" />

      {/* White Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b 
      from-white/10 via-transparent to-white" />

      {/* Left Glow */}
      <div className="absolute -left-40 top-20 w-[450px]
       h-[450px] rounded-full bg-blue-500/20 blur-160px]" />

      {/* Right Glow */}
      <div className="absolute -right-32 bottom-10
       w-[380px] h-[380px] rounded-full bg-cyan-300/20 
       blur-[150px]" />

      {/* Top Light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2
       w-[700px] h-[180px] bg-white/20 blur-[90px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.5) 2px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 1px)
        `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white via-white/5 to-transparent" />
    </section>
  );
}
