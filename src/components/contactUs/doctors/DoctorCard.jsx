import { motion } from "framer-motion";
import { FiCpu, FiActivity } from "react-icons/fi";

export default function DoctorCard({ doctor, position, onSwipe }) {
  return (
    <motion.article
      drag={position === 0 ? "y" : false}
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={{ top: 0.3, bottom: 0.05 }}
      onDragEnd={(e, info) => {
        if (position === 0 && info.offset.y < -120) {
          onSwipe();
        }
      }}
      animate={{
        scale: 1 - position * 0.05,
        y: position * 20,
        opacity: 1 - position * 0.2,
        filter: `blur(${position * 2}px)`,
        zIndex: 10 - position,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 28,
      }}
      whileDrag={{
        scale: 0.98,
      }}
      /* 
        تغییر مهم: تنظیم inset-0 همراه با w-full و h-full 
        تا کارت دقیقاً ابعاد max-w-sm پدر را به خود بگیرد و دفرمه نشود.
      */
      className="
        absolute
        inset-0
        w-full
        h-full
        rounded-[32px]
        overflow-hidden
        bg-slate-950/90
        backdrop-blur-xl
        border
        border-white/10
        shadow-[0_40px_80px_rgba(0,0,0,.6)]
        p-6
        text-white
        cursor-grab
        active:cursor-grabbing
        origin-bottom
        flex
        flex-col
        justify-between
      "
    >
      {/* هاله نور پس‌زمینه */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* محتوای اصلی کارت */}
      <div className="relative z-10 w-full">
        {/* تصویر پزشک با قد ثابت و متناسب */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/5 bg-slate-900">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
        </div>

        {/* نام و تخصص */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-100 tracking-tight">
              {doctor.name}
            </h2>
            {position === 0 && (
              <span className="text-[10px] bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-md font-mono animate-pulse">
                SWIPE UP
              </span>
            )}
          </div>
          <p className="text-xs text-sky-400/90 font-medium mt-1">
            {doctor.title}
          </p>
        </div>

        {/* مهارت‌ها */}
        <div className="mt-4 space-y-2">
          {doctor.skills?.slice(0, 3).map((skill) => (
            <div
              key={skill}
              className="flex gap-2.5 items-center bg-white/[0.02] border border-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* فوتر کارت - به لطف flex-col و mt-auto همیشه پایین می‌ماند */}
      <footer className="relative z-10 pt-4 border-t border-white/5 flex justify-between items-center w-full">
        <span className="text-[10px] font-mono text-slate-500 tracking-wider">
          CLINIC-{doctor.id}
        </span>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="flex items-center gap-1 text-sky-400/50">
            <div className="p-1 rounded-md bg-sky-500/10 text-[10px]">
              <FiActivity />
            </div>
            <span className="text-[9px] font-bold tracking-widest">
              EST. 2024
            </span>
          </div>
          <FiCpu className="text-sm text-sky-400 animate-spin-slow" />
        </div>
      </footer>
    </motion.article>
  );
}
