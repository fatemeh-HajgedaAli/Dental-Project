// doctors-card
import { motion } from "framer-motion";
import { FiCpu, FiActivity, FiChevronUp } from "react-icons/fi";
// start
export default function DoctorCard({ doctor, position, onSwipe }) {
  const isTopCard = position === 0;
  // jsx
  return (
    <motion.article
      drag={isTopCard ? "y" : false}
      dragConstraints={{ top: -350, bottom: 0 }}
      dragElastic={{ top: 0.25, bottom: 0.05 }}
      onDragEnd={(e, info) => {
        if (isTopCard && info.offset.y < -120) {
          onSwipe();
        }
      }}
      animate={{
        scale: 1 - position * 0.05,
        y: position * 22,
        opacity: 1 - position * 0.22,
        filter: `blur(${position * 3}px)`,
        zIndex: 20 - position,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 30,
      }}
      whileHover={isTopCard ? { scale: 1.015, y: -4 } : {}}
      whileDrag={{ scale: 0.98, cursor: "grabbing" }}
      className="
        group
        absolute
        inset-0
        w-full
        h-full
        rounded-[36px]
        overflow-hidden
        bg-slate-950/80
        backdrop-blur-2xl
        border
        border-white/10
        hover:border-sky-500/30
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(14,165,233,0.1)]
        p-6
        text-white
        cursor-grab
        active:cursor-grabbing
        origin-bottom
        flex
        flex-col
        justify-between
        transition-colors
        duration-500
      "
    >
      {/* هاله نور چندرنگ پس‌زمینه */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none group-hover:bg-sky-500/30 transition-all duration-700" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-indigo-500/15 blur-3xl rounded-full pointer-events-none" />

      {/* خط درخشان لبه بالایی */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent pointer-events-none" />

      {/* محتوای اصلی کارت */}
      <div className="relative z-10  flex flex-col">
        {/* باکس تصویر کامل پزشک */}
        <div
          className="relative w-full h-auto rounded-2xl overflow-hidden
         border border-white/10 bg-sky-900/80 shadow-inner group/img flex items-center justify-center p-2"
        >
          {/* تصویر کامل (object-contain) بدون برش خوردن */}
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full rounded-xl object-cover pointer-events-none transition-transform duration-700 group-hover/img:scale-105"
          />

          {/* کارت شیشه‌ای (Glassmorphism) روی تصویر در پایین */}
          <div
            className="absolute bottom-4 inset-x-2 p-3 rounded-xl bg-slate-950/60
           backdrop-blur-md border border-white/10 shadow-lg mx-2"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-extrabold text-white tracking-tight drop-shadow-sm">
                {doctor.name}
              </h2>

              {/* نشان SWIPE UP */}
              {isTopCard && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1 bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-300 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider font-semibold"
                >
                  <span>SWIPE</span>
                  <motion.div
                    animate={{ y: [-1, -3, -1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    <FiChevronUp className="text-xs text-sky-400" />
                  </motion.div>
                </motion.div>
              )}
            </div>

            <p className="text-[11px] font-semibold text-sky-300 mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {doctor.title}
            </p>
          </div>
        </div>

        {/* مهارت‌ها با استایل Chipهای نیونی */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {doctor.skills?.slice(0, 3).map((skill) => (
            <div
              key={skill}
              className="
                flex items-center gap-2
                bg-white/[0.03] hover:bg-sky-500/10
                border border-white/10 hover:border-sky-500/30
                rounded-xl px-3 py-1.5
                text-xs text-slate-200 font-medium
                backdrop-blur-md transition-all duration-300
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
