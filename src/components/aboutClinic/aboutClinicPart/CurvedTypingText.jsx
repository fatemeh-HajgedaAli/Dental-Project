import React from "react";
import { motion } from "framer-motion";

export default function CurvedTypingText() {
  const text = "خالقان لبخند زیبای شما";
  const characters = Array.from(text);

  return (
    <div
      className="
        relative
        z-40
        pointer-events-none
        flex
        items-center
        justify-center
        mx-auto

        /* هماهنگی ابعاد باکس با گرید هدر شما */
        w-[300px]
        h-[100px]
        sm:w-[400px]
        sm:h-[120px]
        md:w-[460px]
        md:h-[140px]

        /* انیمیشن زوم و چرخش بسیار ریز برای زنده شدن متن */
        transition-all
        duration-700
        hover:scale-[1.03]
        hover:-rotate-1
      "
    >
      <svg
        viewBox="0 0 460 140"
        className="
          w-full
          h-full
          overflow-visible
        "
      >
        <defs>
          {/* همگام‌سازی گرادیان متن با گرادیان هدر اصلی */}
          <linearGradient
            id="clinicTextGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#0369a1" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>

          {/* افکت بلور درخشان در پشت حروف (Glow) */}
          <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* مسیر منحنی موجی فوق‌العاده نرم (S-Curve) به جای نیم‌دایره
            این فرم دقیقاً تداعی‌کننده خط لبخند (Smile Line) است و زیر دایورِ هدر عالی می‌نشیند.
          */}
          <path
            id="clinicCurve"
            d="M 30,80 Q 130,20 230,70 T 430,50"
            fill="none"
          />
        </defs>

        <text
          filter="url(#textGlow)"
          className="font-black"
          fontSize="24"
          fontWeight="900"
          letterSpacing="1.5"
        >
          {/* startOffset="50%" و textAnchor="middle" متن را در مرکز موج قفل می‌کند */}
          <textPath href="#clinicCurve" startOffset="50%" textAnchor="middle">
            {characters.map((char, index) => {
              // با توجه به راست‌به‌چپ بودن، ایندکس کلمه "لبخند" بازنشانی شد.
              const highlight = index >= 7 && index <= 11;

              return (
                <motion.tspan
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 12,
                    filter: "blur(10px)",
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    // افکت سینمایی جهش نرم حروف (Cubic Bezier)
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  fill={highlight ? "url(#clinicTextGradient)" : "#1e293b"}
                  stroke={highlight ? "rgba(255,255,255,0.9)" : "transparent"}
                  strokeWidth="0.6"
                  paintOrder="stroke"
                >
                  {char}
                </motion.tspan>
              );
            })}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
