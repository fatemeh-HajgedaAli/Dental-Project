// HeroContent.jsx
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div
      className="w-full flex flex-col items-start  lg:items-end  lg:gap-8 
    -mt-45 lg:mt-16"
    >
      {/* Title */}
      <div className="w-full text-center lg:text-left lg:mt-10 select-none">
        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-5xl   md:text-6xl   lg:text-7xl   font-semibold  
           leading-1/2   lg:leading-[1.15]   tracking-[-0.04em]   text-slate-950 "
        >
          لبخندی زیبا،
          <br />
          <span
            className="
  relative
  inline-block
  mt-3
  font-black
  tracking-[-0.02em]
  bg-gradient-to-br
  from-sky-800
  via-sky-500
  to-blue-500
  bg-clip-text
  text-transparent
  [WebkitTextStroke:5px_rgba(14,165,233,0.35)]
  drop-shadow-[10px_10px_30px_rgba(14,165,233,.35)]
  before:absolute
  before:inset-0
  before:-z-10
  before:bg-gradient-to-r
  before:from-cyan-300/40
  before:via-sky-900/30
  before:to-blue-900/40
  before:blur-2xl
  after:absolute
  after:inset-0
  after:bg-white/10
  after:blur-xl
  after:-z-10
"
          >
            آغاز یک زندگی بهتر
          </span>
        </motion.h1>
      </div>

      {/* Description */}
      <div className="hidden lg:flex  w-full lg:w-[85%] text-center lg:text-right ">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-slate-600 lg:text-xl md:text-base md:leading-8 font-medium
          border-r-4 border-cyan-400/40 pr-4 mr-[80px]"
          className="text-slate-600 lg:text-xl font-light md:text-base md:leading-6 font-medium
          border-r-4 border-cyan-400/40 pr-4 mr-[80px] "
        >
          «تجربه‌ای نو از دندانپزشکی مدرن؛
          <span className="text-blue-600 font-light">
            ترکیب تکنولوژی روز دنیا، تخصص حرفه‌ای و محیطی آرام برای لبخندی سالم
            و ماندگار»
          </span>
        </motion.p>
      </div>
    </div>
  );
}
