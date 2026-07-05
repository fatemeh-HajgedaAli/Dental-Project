// HeroContent.jsx
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="w-full flex flex-col items-start  lg:items-end  lg:gap-8">
      {/* Title */}
      <div className="w-full text-center lg:text-left  -mt-[50px] lg:mt-10  ">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-5xl lg:text-6xl font-bold leading-[0.5] lg:leading-[1.1]
            text-slate-900 py-[5px] "
        >
          لبخندی زیبا،{" "}
          <span
            className="bg-gradient-to-r from-sky-700 via-cyan-500 
            to-emerald-300  text-4xl
            bg-clip-text text-transparent font-bold
            drop-shadow-[0_2px_10px_rgba(14,165,233,0.15)] 
            inline-block"
          >
            آغاز یک زندگی بهتر
          </span>
        </motion.h1>
      </div>

      {/* Description */}
      <div className="hidden lg:flex w-full lg:w-[85%] text-center lg:text-right">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-slate-600 lg:text-xl md:text-base md:leading-8 font-medium
          border-r-4 border-cyan-400/40 pr-4 mr-[80px]"
        >
          «تجربه‌ای نو از دندانپزشکی مدرن؛ ترکیب تکنولوژی روز دنیا، تخصص حرفه‌ای
          و محیطی آرام برای لبخندی سالم و ماندگار»
        </motion.p>
      </div>
    </div>
  );
}
