// main-ContactUs
import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import AppointmentForm from "../components/appointment/AppointmentForm";
import ContactBackground from "../components/contactUs/ContactBackground";
import CenterSection from "../components/contactUs/CenterSection";
import ClinicInfoBar from "../components/contactUs/ClinicInfoBar";

export default function ContactUs({ form, sendEmail, status }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // مسیر منحنی پیچشی (Wave / S-Curve)
  const twistedPath = "M 10 20 C 100 90, 200 -10, 290 80";

  return (
    <div
      className="w-full min-h-screen p-4 md:p-8 flex items-center justify-center font-sans"
      dir="rtl"
    >
      <div className="w-full max-w-10xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col justify-between min-h-[600px] relative">
        {/* ۱. بخش هیرو پس‌زمینه */}
        <ContactBackground>
          {/* circlePart */}
          <div className="absolute transform translate-y-50 z-20 bg-white rounded-full w-[280px] h-[280px] md:w-[340px] md:h-[340px] shadow-xl shadow-blue-900/10 border-8 border-white flex flex-col items-center justify-center text-center p-6 transition-all hover:scale-105">
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-1">
              OUR MISSION
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600 leading-tight">
              لبخندی سالم و شاد
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-amber-500 mt-1 mb-2">
              با خدمات کلینیک ما
            </h3>
            <p className="text-xs text-slate-400 font-medium mb-4">
              #لبخند_زیبا
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-b from-blue-900 via-slate-950 to-blue-950 translate-y-4 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all group"
            >
              <span>رزرو نوبت هم‌اکنون</span>
              <span className="group-hover:translate-x-[-4px] transition-transform">
                ←
              </span>
            </button>
          </div>
        </ContactBackground>

        {/* ======================================================== */}
        {/* ۲. بخش مرکز و خط منحنی پیچشی نقطه‌ای (SVG Twisted Dot Line) */}
        {/* ======================================================== */}
        <div className="relative w-full">
          {/* SVG منحنی پیچشی بین بخش‌ها */}
          <div className="hidden lg:block absolute top-1/2 right-[18%] -translate-x-1/2 -translate-y-1/2 w-[280px] xl:w-[360px] h-[100px] z-20 pointer-events-none">
            <svg
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              {/* مسیر پیچشی نقطه‌ای (Dotted Twisted Path) */}
              <motion.path
                id="curved-path"
                d={twistedPath}
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* آیکون دندان درخشان متحرک روی مسیر پیچشی */}
              <g className="drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                <path
                  fill="#151c82"
                  d="M-6,-8 C-8,-8 -10,-6 -10,-3 C-10,2 -7,8 -5,10 C-3.5,11.5 -2.5,9 -1,7 C-0.5,6.3 0.5,6.3 1,7 C2.5,9 3.5,11.5 5,10 C7,8 10,2 10,-3 C10,-6 8,-8 6,-8 C4,-8 2,-7 0,-5 C-2,-7 -4,-8 -6,-8 Z"
                />
                <animateMotion
                  dur="5.5s"
                  repeatCount="indefinite"
                  path={twistedPath}
                  rotate="auto"
                  calcMode="spline"
                  keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                  keyTimes="0; 0.5; 1"
                />
              </g>
            </svg>
          </div>

          {/* کامپوننت محتوای اصلی */}
          <CenterSection onOpenModal={() => setIsModalOpen(true)} />
        </div>

        {/* ۳. نوار اطلاعات کلینیک */}
        <ClinicInfoBar />
      </div>
    </div>
  );
}
