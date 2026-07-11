import React from "react";
import doctorImg from "../../assets/images/contactUs/doctor.jpg";

export default function ContactBackground({ children }) {
  return (
    <div className="relative w-full h-[400px] bg-slate-200 overflow-hidden flex items-center justify-center">
      {/* تصویر پزشک با لایه ترکیب رنگ */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-multiply transition-all duration-500"
        style={{ backgroundImage: `url(${doctorImg})` }}
      />

      {/* گرادیان شیشه‌ای ملایم */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-slate-900/5 to-white" />

      {/* متن فانتزی بزرگ پشت دایره */}
      <div className="absolute top-8 text-6xl md:text-8xl font-black text-slate-400/20 tracking-wider select-none pointer-events-none">
        FREE CHECK UP
      </div>

      {/* دایره مرکزی در این قسمت قرار می‌گیرد */}
      {children}
    </div>
  );
}
