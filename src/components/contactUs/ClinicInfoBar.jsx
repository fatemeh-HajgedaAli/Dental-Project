import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ClinicInfoBar() {
  return (
    <div className="bg-slate-800 text-slate-200 p-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-right border-t border-slate-700 mt-6">
      {/* نشانی */}
      <div className="flex items-start gap-3 justify-center md:justify-start">
        <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-white text-sm md:text-base">
            نشانی کلینیک
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            تهران، میدان ونک، Suite 400
          </p>
          <p className="text-xs text-slate-400 flex items-center gap-1 justify-center md:justify-start mt-0.5">
            <Clock className="w-3 h-3" /> شنبه تا چهارشنبه: ۸ تا ۲۰
          </p>
        </div>
      </div>

      {/* تلفن */}
      <div className="flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-slate-700/60 py-4 md:py-0">
        <span className="text-xs text-slate-400 font-medium mb-1">
          شماره تلفن مستقیم
        </span>
        <a
          href="tel:+989987959095"
          className="text-lg md:text-xl font-bold text-white tracking-wider hover:text-blue-400 transition-colors flex items-center gap-2 dir-ltr"
        >
          <Phone className="w-4 h-4 text-blue-400" /> +۹۸ ۹۹۸۷ ۹۵۹۰۹۵
        </a>
      </div>

      {/* نام کلینیک و لوگو */}
      <div className="flex items-center justify-center md:justify-end gap-3">
        <div className="text-right">
          <h4 className="font-black text-white text-base md:text-lg tracking-tight">
            کلینیک دندان‌پزشکی خشی
          </h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">
            Khushi Dental Care
          </p>
        </div>
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2C9 2 7 3.5 7 6c0 2.5 1.5 4.5 3 6.5.5.7 1 1.5 1 2.5v2c0 1-.5 1.5-1.5 1.5H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1h-1.5c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.8 1-2.5 1.5-2 3-4 3-6.5 0-2.5-2-4-5-4Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
