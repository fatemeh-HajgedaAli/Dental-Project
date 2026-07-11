import React from "react";
import { Phone, MapPin, Clock, ArrowUp } from "lucide-react";

export default function ClinicInfoBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-900 via-slate-950 to-blue-950 p-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-right border-t border-slate-700 mt-6 translate-y-4">
      <div className="flex items-start gap-3 justify-center md:justify-start">
        <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />

        <div>
          <h4 className="font-bold text-white text-sm md:text-base">
            نشانی کلینیک
          </h4>

          <p className="text-xs text-slate-400 mt-1">
            تهران، میدان ونک، Suite 400
          </p>

          <p className="text-xs text-slate-400 flex items-center gap-1 justify-center md:justify-start mt-1">
            <Clock className="w-3 h-3" />
            شنبه تا چهارشنبه: ۸ تا ۲۰
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-slate-700/60 py-4 md:py-0">
        <span className="text-xs text-slate-400 font-medium mb-1">
          شماره تلفن مستقیم
        </span>

        <a
          href="tel:+989987959095"
          className="dir-ltr flex items-center gap-2 text-lg md:text-xl font-bold text-white tracking-wider hover:text-cyan-400 transition"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          +۹۸ ۹۹۸۷ ۹۵۹۰۹۵
        </a>
      </div>

      <div className="flex items-center justify-center md:justify-end gap-3">
        <div className="text-right">
          <h4 className="font-black text-white text-base md:text-lg">
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

      <button
        onClick={scrollToTop}
        aria-label="بازگشت به بالا"
        className="
        fixed
        bottom-6
        left-6
        z-50
        w-12
        h-12
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        text-white
        shadow-xl
        shadow-cyan-500/20
        flex
        items-center
        justify-center
        hover:bg-cyan-500
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
        "
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
