// ContactUs
import { useState } from "react";
import AppointmentForm from "../components/appointment/AppointmentForm";
import ContactBackground from "../components/contactUs/ContactBackground";
import CenterSection from "../components/contactUs/CenterSection";
// import ClinicInfoBar from "../components/contactUs/ClinicInfoBar";

export default function ContactUs({ form, sendEmail, status }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="w-full min-h-screen p-4 md:p-8 flex items-center justify-center font-sans"
      dir="rtl"
    >
      <div className="w-full max-w-10xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col justify-between min-h-[600px] relative">
        {/* 1. Hero / Background */}
        <ContactBackground>
          {/* Glassmorphism Circle Section */}
          <div
            className="
  absolute
  z-20

  /* ================= MOBILE ================= */
  top-auto
  bottom-38
  left-2
  right-auto

  translate-x-0
  translate-y-0

  w-[150px]
  h-[150px]
  p-4

  /* ================= SMALL MOBILE ================= */
  sm:bottom-12
  sm:left-6
  sm:right-auto
  sm:w-[120px]
  sm:h-[120px]
  sm:p-2
  /* ================= TABLET ================= */
  md:top-1/2
  md:left-[10%]
  md:right-auto

  md:-translate-y-1/2
  md:translate-x-0

  md:w-[320px]
  md:h-[320px]
  md:p-7

  /* ================= DESKTOP ================= */
  lg:left-[10%]
  lg:w-[360px]
  lg:h-[360px]
  lg:p-8

  /* ================= STYLE ================= */
  rounded-full
  overflow-hidden

  flex
  flex-col
  items-center
  justify-center
  text-center

  transition-all
  duration-500
  ease-in-out

  hover:scale-[1.04]

  /* ================= GLASS ================= */
  bg-white/25
  backdrop-blur-xl
  border
  border-white/40

  shadow-[0_8px_32px_rgba(31,38,135,0.22)]
"
          >
            {/* Decorative Glass Elements (pointer-events-none) */}
            <div className="absolute inset-2 rounded-full border border-white/20 pointer-events-none" />
            <div className="absolute top-7 right-7 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/50 blur-sm pointer-events-none" />
            <div className="absolute bottom-10 left-8 sm:bottom-14 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-cyan-200/40 blur-sm pointer-events-none" />

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-[10px] md:text-xs font-extrabold tracking-[0.15em] text-white drop-shadow-md mb-1 sm:mb-2">
                OUR MISSION
              </span>

              <h2 className="text-[15px] sm:text-xs md:text-2xl lg:text-3xl font-extrabold text-blue-950 leading-tight drop-shadow-sm">
                لبخندی سالم و شاد
              </h2>

              <h3 className="text-[10px] sm:text-base md:text-xl lg:text-2xl font-bold text-amber-600 mt-1 mb-1 sm:mb-2">
                با خدمات کلینیک ما
              </h3>

              <p className="text-[10px] sm:text-xs md:text-sm text-blue-900/80 font-medium hidden lg:flex">
                #لبخند_زیبا
              </p>
            </div>
          </div>
        </ContactBackground>

        {/* 2. Main Content */}
        <CenterSection onOpenModal={() => setIsModalOpen(true)} />

        {/* 3. Clinic Information
        <ClinicInfoBar /> */}

        {/* 4. Appointment Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              >
                ✕
              </button>

              <AppointmentForm
                form={form}
                sendEmail={sendEmail}
                status={status}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
