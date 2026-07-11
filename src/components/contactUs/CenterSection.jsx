import React from "react";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import arcImg from "../../assets/images/contactUs/backgroundTwo.jpg";
// start
export default function CenterSection({ onOpenModal }) {
  // jsx
  return (
    <section className="relative w-full px-5 md:px-12 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* تصویر */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-300/20 blur-3xl scale-110" />

            <img
              src={arcImg}
              alt="Dental Services"
              className="relative w-[260px] md:w-[380px] lg:w-[450px] object-contain drop-shadow-2xl transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* متن */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="max-w-lg bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-2xl p-8">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full">
              <CalendarDays className="w-4 h-4" />
              رزرو آنلاین
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              لبخند سالم، <br />
              از همین امروز شروع می‌شود.
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              برای دریافت مشاوره، رزرو نوبت یا بررسی وضعیت دندان‌های خود، کافی
              است فرم را تکمیل کنید. تیم ما در کوتاه‌ترین زمان با شما تماس خواهد
              گرفت.
            </p>

            <Link
              to="/appointment"
              className="
    mt-8
    group
    inline-flex
    items-center
    gap-3
    bg-gradient-to-r
    from-blue-600
    to-cyan-500
    hover:from-blue-700
    hover:to-cyan-600
    text-white
    font-bold
    px-7
    py-4
    rounded-2xl
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
  "
            >
              رزرو نوبت
              <ArrowLeft
                className="
    w-5
    h-5
    transition
    group-hover:-translate-x-1
    "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
