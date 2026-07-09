// Icon-part

import { motion } from "framer-motion";
import { iconData } from "./emergencey.data";

export default function EmergensiIcons({ setActiveModal }) {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none" dir="rtl">
      {/* Mobile */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6 sm:hidden">
        {iconData.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveModal(item)}
              className="pointer-events-auto flex flex-col items-center gap-2"
            >
              <Icon className="text-3xl text-white" />
              <span className="text-[10px] font-bold text-white text-center">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="hidden sm:block">
        {iconData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              onClick={() => setActiveModal(item)}
              className={`absolute ${item.position} pointer-events-auto cursor-pointer group`}
            >
              {/* Glow */}
              <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" />

              {/* Card */}

              <div
                className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900/25 border border-white/20 
                shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              >
                <Icon
                  className={`text-[30px] text-white transition-all
                     duration-300
                       ${item.iconColor}`}
                />
              </div>

              <span
                className="text-[5px] md:text-sm 
              font-bold tracking-wide 
              text-white text-center transition-all duration-300 "
              >
                {item.title}
              </span>

              <div className="absolute bottom-0 left-0  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
