// main-ContactUs
import { useState } from "react";
import { X } from "lucide-react";
import AppointmentForm from "../components/appointment/AppointmentForm";
import ContactBackground from "../components/contactUs/ContactBackground";
import CenterSection from "../components/contactUs/CenterSection";
import ClinicInfoBar from "../components/contactUs/ClinicInfoBar";

export default function ContactUs({ form, sendEmail, status }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="w-full min-h-screen  bg-gradient-to-b  from-blue-900  via-slate-950  to-blue-950 translate-y-4 p-4 md:p-8 flex items-center justify-center font-sans"
      dir="rtl"
    >
      <div className="w-full max-w-10xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col justify-between min-h-[600px] relative">
        {/* ۱. بخش هیرو پس‌زمینه */}
        <ContactBackground>
          {/* circlePart */}
          <div className="absolute transform translate-y-50 z-10 bg-white rounded-full w-[280px] h-[280px] md:w-[340px] md:h-[340px] shadow-xl shadow-blue-900/10 border-8 border-white flex flex-col items-center justify-center text-center p-6 transition-all hover:scale-105">
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
              className="bg-gradient-to-b  from-blue-900 via-slate-950 to-blue-950 translate-y-4 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all group"
            >
              <span>رزرو نوبت هم‌اکنون</span>
              <span className="group-hover:translate-x-[-4px] transition-transform">
                ←
              </span>
            </button>
          </div>
        </ContactBackground>

        <CenterSection onOpenModal={() => setIsModalOpen(true)} />

        <ClinicInfoBar />
      </div>
    </div>
  );
}
