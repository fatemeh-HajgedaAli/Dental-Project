import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import emplantPng from "../../assets/images/implant/teethPng.png";
import teethBg from "../../assets/images/implant/BgJaw (1).png";

export default function ImplantImage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // حرکت دندان تکی از ارتفاع بالا (پشت متن‌ها) تا سر جای خودش
  const implantY = useTransform(scrollYProgress, [0, 1], [-750, -20]);
  const implantOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const implantScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <div
      ref={ref}
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        h-[430px]
        md:h-[650px]
        overflow-hidden
      "
    >
      {/* هاله نوری پس‌زمینه */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-96
          h-96
          rounded-full
          bg-sky-400/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* باکس نگه‌دارنده تصاویر چسبیده به کف */}
      <div className="relative w-full max-w-[400px] md:max-w-[650px] h-full flex items-end justify-center">
        {/* تصویر فک و دندان‌ها - لایه زیرین اصلی */}
        <motion.img
          src={teethBg}
          alt="Dental Jaw Background"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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

        {/* تصویر متحرک ایمپلنت - z-index به 20 تغییر کرد تا از پشتِ متن (z-30) رد بشه */}
        <div
          className="
    absolute
    bottom-16
    left-1/2
    -translate-x-1/2
    w-[320px]
    h-[320px]
    rounded-full
    bg-gradient-to-r
    from-sky-400/40
    via-cyan-300/30
    to-blue-500/20
    blur-[90px]
    animate-pulse
    z-0
    pointer-events-none
  "
        />
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
 bottom-0
 w-full
 object-contain
 z-0
 lg:z-20
 drop-shadow-[0_-10px_25px_rgba(14,165,233,0.08)]
 pointer-events-none
 select-none
"
        />
      </div>
    </div>
  );
}
