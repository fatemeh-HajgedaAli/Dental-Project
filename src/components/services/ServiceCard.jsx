import { motion } from "framer-motion";

export default function ServiceCard({ service, index, x, y }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      whileHover={{ scale: 1.08, y: y - 8 }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
      className="absolute right-1/2 top-1/2 translate-x-1/2
       -translate-y-1/2 flex flex-row items-center gap-2 
       sm:gap-3 md:gap-5 cursor-pointer group select-none"
    >
      {/* ⚪ CIRCLE NUMBER (سمت راستِ متن) */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white via-sky-50 to-cyan-100 border border-sky-200 shadow-[0_15px_40px_rgba(14,165,233,.18)] flex items-center justify-center shrink-0 group-hover:border-sky-500 transition-colors duration-300">
        {/* Inner Ring */}
        <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-dashed border-sky-300/70" />
        {/* Number */}
        <span className="relative z-10 font-black text-base sm:text-lg md:text-2xl text-sky-700">
          {number}
        </span>{" "}
      </div>
      {/* 📝 TEXT (سمت چپِ دایره شماره‌دار) */}
      <div className="text-right max-w-[100px] sm:max-w-[140px] md:max-w-[220px]">
        <h3 className="font-black text-[11px] sm:text-xs md:text-lg text-gray-700 group-hover:text-sky-600 transition-colors">
          {service.title}
        </h3>
        <p className="hidden md:block mt-1 text-xs text-gray-400 leading-5 line-clamp-2">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
