import React from "react";
import { ArrowLeft, CalendarDays, Clock3, Sparkles } from "lucide-react";

export default function CenterSection({ onOpenModal }) {
  return (
    <section className="relative w-full px-5 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
      {/* =========================================
          DECORATIVE GLOWS (Keep for visual effect)
      ========================================= */}
      <div className="absolute -left-32 top-20 w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute -right-32 bottom-10 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto transition-all duration-300">
        <div className="flex justify-start">
          <div
            className="
              relative w-full max-w-2xl overflow-hidden
              rounded-[2rem] border border-white/70 bg-white/70 backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(15,23,42,0.15)]
              p-6 md:p-10 lg:p-12
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(15,23,42,0.2)]
            "
          >
            {/* DECORATIVE CARD ELEMENTS */}
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-cyan-400/20 blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-28 h-28 rounded-br-[4rem] bg-gradient-to-br from-cyan-400/10 to-transparent pointer-events-none" />

            {/* BADGE SECTION */}
            <div className="relative flex items-center justify-between gap-4">
              <div
                className="
                  inline-flex items-center gap-2 rounded-full border
                  border-cyan-200/80 bg-cyan-50/80 px-4 py-2
                  text-xs md:text-sm font-bold text-cyan-800 shadow-sm
                "
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-white shadow-md">
                  <CalendarDays className="w-4 h-4" />
                </span>
                رزرو آنلاین و هوشمند
              </div>
              <Sparkles className="hidden sm:block w-6 h-6 text-amber-400 animate-pulse" />
            </div>

            {/* TITLE SECTION */}
            <div className="relative mt-7">
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-black leading-[1.35] text-slate-950">
                لبخند درخشان شما،
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500">
                  مأموریت تخصصی ماست.
                </span>
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
            </div>

            {/* DESCRIPTION SECTION */}
            <p className="mt-6 text-sm md:text-base leading-8 text-slate-700 font-medium max-w-xl text-justify md:text-right">
              برای دریافت نوبت، مشاوره تخصصی درباره
              <span className="font-bold text-blue-700">
                {" "}
                طرح لبخند، ایمپلنت و خدمات زیبایی دندان{" "}
              </span>
              فرم رزرو را تکمیل کنید. تیم ما در کوتاه‌ترین زمان برای هماهنگی
              نوبت با شما تماس خواهد گرفت.
            </p>

            {/* QUICK INFO BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                {
                  icon: Clock3,
                  text: "پاسخگویی سریع",
                  iconColor: "text-cyan-600",
                },
                {
                  icon: Sparkles,
                  text: "مشاوره تخصصی",
                  iconColor: "text-amber-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-100/80 border border-slate-200/70 px-4 py-2.5 text-xs md:text-sm font-semibold text-slate-600"
                >
                  <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div className="relative mt-9">
              <button
                type="button"
                onClick={onOpenModal}
                className="
                  group relative w-full sm:w-auto min-w-[250px] overflow-hidden rounded-2xl
                  bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500
                  px-7 py-4 text-white font-extrabold
                  shadow-[0_15px_35px_rgba(37,99,235,0.3)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,182,212,0.4)]
                  active:translate-y-0
                "
              >
                {/* Button Shine Effect */}
                <span className="absolute inset-y-0 -left-20 w-12 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />

                <span className="relative flex items-center justify-center gap-3">
                  <span>تکمیل فرم و رزرو نوبت</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 border border-white/20 transition-all duration-300 group-hover:bg-white/25">
                    <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
                  </span>
                </span>
              </button>
            </div>

            <p className="mt-4 text-[11px] md:text-xs text-slate-400 font-medium">
              ثبت درخواست شما کمتر از یک دقیقه زمان می‌برد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
