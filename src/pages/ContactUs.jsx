// main-ContactUs
import { useState } from "react";
import { X } from "lucide-react";
import AppointmentForm from "../components/contactUs/AppointmentForm";
import ContactBackground from "../components/contactUs/ContactBackground";
import CenterSection from "../components/contactUs/CenterSection";
import ClinicInfoBar from "../components/contactUs/ClinicInfoBar";

export default function ContactUs({ form, sendEmail, status }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="w-full min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center font-sans"
      dir="rtl"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col justify-between min-h-[600px] relative">
        {/* ۱. بخش هیرو پس‌زمینه */}
        <ContactBackground>
          {/* دایره روی هیرو */}
          <div className="absolute transform translate-y-12 md:translate-y-16 z-10 bg-white rounded-full w-[280px] h-[280px] md:w-[340px] md:h-[340px] shadow-xl shadow-blue-900/10 border-8 border-white flex flex-col items-center justify-center text-center p-6 transition-all hover:scale-105">
            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">
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
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all group"
            >
              <span>رزرو نوبت هم‌اکنون</span>
              <span className="group-hover:translate-x-[-4px] transition-transform">
                ←
              </span>
            </button>
          </div>
        </ContactBackground>

        {/* ۲. بخش تصاویر کمانی وسط */}
        <CenterSection onOpenModal={() => setIsModalOpen(true)} />

        {/* ۳. نوار اطلاعات پایینی */}
        <ClinicInfoBar />

        {/* ۴. سیستم پاپ‌آپ (مودال) متصل به فرم شما */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 relative p-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all z-10"
              >
                <X className="w-5 h-5" />
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
