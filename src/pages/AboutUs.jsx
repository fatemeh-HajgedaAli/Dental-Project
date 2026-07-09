import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TeethPng from "../assets/images/aboutUs/teeth-png.png"; // تصویر جدید با پس‌زمینه مشکی

export default function AboutUsMouth() {
  const containerRef = useRef(null);

  // ۱. مانیتور کردن اسکرول برای بازه زمانی مشخص
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ۲. کنترل جابه‌جایی فک‌ها (دقیقاً بر اساس ابعاد واقعی لب در تصویر)
  const topJawY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-48%"]);
  const bottomJawY = useTransform(scrollYProgress, [0, 0.8], ["0%", "48%"]);

  // ۳. انیمیشن محو و پاپ‌آپ شدن متن از تاریکی دهان
  const textScale = useTransform(scrollYProgress, [0.25, 0.75], [0.7, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.65], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[220vh] bg-slate-950">
      {/* باکس مانیتور و چسبان در مرکز دید کاربر */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* ==========================================
            ۱. فک و لب بالا (نیمه بالایی تصویر)
           ========================================== */}
        <motion.div
          style={{ y: topJawY }}
          className="absolute top-0 z-20 flex h-1/2 w-full items-end justify-center overflow-hidden"
        >
          {/* کانتینر تصویر با ابعاد کاملاً هماهنگ و واکنش‌گرا */}
          <div className="w-[320px] sm:w-[480px] md:w-[640px] lg:w-[720px] h-screen flex items-end justify-center">
            <img
              src={TeethPng}
              alt="Top Teeth"
              /* mix-blend-screen باعث می‌شود مشکیِ دور عکس کاملاً در پس‌زمینه محو و ناپدید شود */
              className="w-full h-full object-contain object-center translate-y-1/2 scale-100 mix-blend-screen"
            />
          </div>
        </motion.div>

        {/* ==========================================
            ۲. متن خلاقانه درباره ما (عمق دهان)
           ========================================== */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          className="absolute z-10 px-6 text-center max-w-2xl select-none"
          dir="rtl"
        >
          <span className="text-xs font-bold tracking-widest text-sky-500 bg-sky-500/10 px-3 py-1 rounded-full uppercase mb-3 inline-block">
            بیشتر بدانید
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">
            درباره کلینیک ما
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-8 font-medium drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
            ما در کلینیک دندانپزشکی اورژانسی، با بهره‌گیری از مجرب‌ترین متخصصان
            و پیشرفته‌ترین تجهیزات، در ۲۴ ساعت شبانه‌روز و ۷ روز هفته آمادهٔ
            تسکین سریع درد و درمان تخصصی لبخند شما هستیم.
          </p>
        </motion.div>

        {/* ==========================================
            ۳. فک و لب پایین (نیمه پایینی تصویر)
           ========================================== */}
        <motion.div
          style={{ y: bottomJawY }}
          className="absolute bottom-0 z-20 flex h-1/2 w-full items-start justify-center overflow-hidden"
        >
          {/* کانتینر تصویر معکوس برای فک پایین */}
          <div className="w-[320px] sm:w-[480px] md:w-[640px] lg:w-[720px] h-screen flex items-start justify-center">
            <img
              src={TeethPng}
              alt="Bottom Teeth"
              className="w-full h-full object-contain object-center -translate-y-1/2 scale-100 mix-blend-screen"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
