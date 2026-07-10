import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import emplantPng from "../../../assets/images/aboutUs/emplantPng.png";
import teethBg from "../../../assets/images/aboutUs/teethBg.png";

export default function AboutImplant() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // وقتی به مرکز اسکرین رسید انیمیشن کامل تمام می‌شود
  });

  // حرکت عمودی ایمپلنت از بالا (-۲۸۰ پیکسل) به نقطه صفر (جای اصلی خود دندان)
  const implantY = useTransform(scrollYProgress, [0, 1], [-1090, 135]);
  const implantOpacity = useTransform(scrollYProgress, [0, 1], [2, 4]);
  const implantScale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);

  return (
    <div
      ref={ref}
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        h-[650px]
        md:h-[600px]
        overflow-visible
      "
    >
      {/* Teeth Background (ثابت) */}
      <motion.img
        src={teethBg}
        alt="Dental"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          absolute
          bottom-0
         ml-[170px]  lg:mr-[450px]
          z-10
          w-[400px]
          md:w-[800px]
          object-contain
          select-none
          pointer-events-none
        "
      />

      {/* Implant (متحرک با اسکرول) */}
      <motion.img
        src={emplantPng}
        alt="Implant"
        style={{
          y: implantY,
          opacity: implantOpacity,
          scale: implantScale,
        }}
        className="
          absolute
          bottom-0
          z-20
          /* ⚡ تراز شدن میلی‌متری و حذف فضای شفاف حاشیه دو عکس */
          -mb-18 ml-[124px] lg:mr-[490px] lg:-mb-10
          w-[380px]
          md:w-[780px]
          object-contain
          drop-shadow-[0_25px_45px_rgba(14,165,233,.18)]
          pointer-events-none
          select-none
        "
      />

      {/* Glow پشت دندان */}
      <div
        className="
          absolute
          bottom-24
          w-56
          h-56
          rounded-full
          bg-sky-400/20
          blur-3xl
          animate-pulse
        "
      />
    </div>
  );
}
