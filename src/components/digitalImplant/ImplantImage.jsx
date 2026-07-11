import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import emplantPng from "../../assets/images/implant/teethPng.png";
import teethBg from "../../assets/images/implant/jawBg.png";

export default function ImplantImage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // تنظیم هوشمند ارتفاع پرتاب در موبایل و دسکتاپ برای فرود دقیق دندان روی فک
  const yOffset =
    typeof window !== "undefined" && window.innerWidth < 768 ? -250 : -650;

  const implantY = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);
  const implantOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const implantScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <div
      ref={ref}
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        h-[700px]
        md:h-[750px]
        overflow-hidden
      "
    >
      {/* هاله نوری پس‌زمینه در پشت فک */}
      <div
        className="
          absolute
          bottom-12
          left-1/2
          -translate-x-1/2
          w-72
          h-72
          md:w-96
          md:h-96
          rounded-full
          bg-sky-400/10
          blur-3xl
          pointer-events-none
          z-0
        "
      />

      {/* main-image- container  */}
      <div className="relative w-full max-w-[540px] md:max-w-[600px] h-full flex items-end justify-center">
        {/* jaw */}
        <motion.img
          src={teethBg}
          alt="Dental Jaw Background"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at bottom, black 70%, transparent 100%)",
            maskImage:
              "radial-gradient(circle at bottom, black 70%, transparent 100%)",
          }}
          className="
    absolute
    bottom-0
    w-full
    object-contain
    z-10
    select-none
    pointer-events-none
  "
        />

        {/* ⚡ tooth */}
        <motion.img
          src={emplantPng}
          alt="Dental Implant"
          style={{
            y: implantY,
            opacity: implantOpacity,
            scale: implantScale,
          }}
          className="
            absolute
            /* پوزیشن قرارگیری دقیق روی حفره فک در jawBg.png */
            bottom-[20%] 
            md:bottom-[27%]
            w-[70%] 
            object-contain
            z-20
            drop-shadow-[0_-5px_15px_rgba(14,165,233,0.15)]
            pointer-events-none
            select-none
          "
        />
      </div>
    </div>
  );
}
