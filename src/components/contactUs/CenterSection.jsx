import React from "react";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

// تغییر مهم: وارد کردن کانتینر پشته‌ای به جای تک کارت و دکمه‌ها
import DoctorStack from "./doctors/DoctorStack";
import { doctors } from "./doctors/doctor.data";

export default function CenterSection({ onOpenModal }) {
  return (
    <section className="relative w-full px-5 md:px-12 py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ستون کارت دندان‌پزشکان (سمت چپ در دسکتاپ / پایین در موبایل) */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1 w-full">
          <div className="w-full max-w-sm">
            <DoctorStack doctors={doctors} />
          </div>
        </div>

        {/* ستون متن و محتوا (سمت راست در دسکتاپ / بالا در موبایل) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
          <div
            className="
              w-full
              max-w-xl
              bg-white/70
              backdrop-blur-xl
              rounded-3xl
              border
              border-white
              shadow-2xl
              p-6
              md:p-10
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                bg-blue-100
                text-blue-700
                text-xs
                font-bold
                px-4
                py-2
                rounded-full
              "
            >
              <CalendarDays className="w-4 h-4" />
              رزرو آنلاین
            </span>

            <h2
              className="
                mt-5
                text-3xl
                md:text-4xl
                font-black
                text-slate-900
                leading-tight
              "
            >
              لبخند سالم،
              <br />
              از همین امروز شروع می‌شود.
            </h2>

            <p
              className="
                mt-5
                text-slate-600
                leading-8
                text-sm
                md:text-base
              "
            >
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
                text-white
                font-bold
                px-7
                py-4
                rounded-2xl
                shadow-xl
                transition-all
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
