import React from "react";
import pngTeeth from "../../assets/images/services/pngTeeth.png"; // مطمئن شو آدرس فایل درست تنظیم شده باشد
// start
export default function BackgroundServices({ children }) {
  // jsx
  return (
    <div className="relative w-full min-h-screen bg-slate-50 
    overflow-hidden  flex flex-col items-center justify-center ">
      {/* mainBg) */}
      <div className="absolute inset-2 z-0 flex items-center 
      justify-start pointer-events-none select-none">
        <img
          src={pngTeeth}
          alt="Dental Implant Background"
          className="
            w-full max-w-[500px] sm:max-w-[650px] md:max-w-[800px]
             lg:max-w-[660px]
            h-auto object-contain
            opacity-10  /* برای اینکه کارت‌ها و متون خوانا باشند، شفافیت را روی ۱۰٪ گذاشتیم */
            filter grayscale-[30%] /* کمی فیلتر خاکستری برای هماهنگی بیشتر با تم دیزاین */
          "
        />

        {/* هاله نوری ملایم در پشت ایمپلنت برای جذابیت بصری */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-sky-200/30 blur-[120px] z-[-1]" />
      </div>

      {/* 📥 محتوای اصلی (چرخ‌دنده خدمات و تایپوگرافی) در این قسمت رندر می‌شود */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
