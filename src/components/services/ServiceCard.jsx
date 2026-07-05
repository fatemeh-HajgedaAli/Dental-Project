// services-card
import { useState } from "react";
import { motion } from "framer-motion";
// start
export default function ServiceCard({ service, x, y, scale, opacity, zIndex }) {
  const Icon = service.icon;
  // state for Open&Close Text
  const [isExpanded, setIsExpanded] = useState(false);
  // jsx
  return (
    <motion.div
      // click-version To see Text
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
      absolute
      w-[150px] md:w-[290px]
      bg-white
      rounded-2xl
      border
      border-sky-200
      shadow-xl
      p-2 md:p-3
      flex flex-col md:flex-row
      gap-1.5 md:gap-3
      items-center
      cursor-pointer
      hover:border-sky-500
      transition-all duration-300
      ${isExpanded ? "z-[99] !scale-105 border-sky-500" : ""}
      `}
      style={{
        x,
        y,
        scale: isExpanded ? scale * 1.05 : scale,
        opacity: isExpanded ? 1 : opacity,
        zIndex: isExpanded ? 99 : zIndex,
      }}
      whileHover={
        !isExpanded
          ? {
              scale: scale * 1.05,
              opacity: 1,
              zIndex: 50,
            }
          : {}
      }
    >
      {/* image-Part */}
      <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden border border-sky-400 flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* text-Part */}
      <div className="text-center md:text-right flex-1 min-w-0 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2 mb-1 md:mb-2">
          {Icon && <Icon size={14} className="text-sky-600 hidden md:block" />}
          <h3 className="font-bold text-[11px] md:text-sm truncate w-full">
            {service.title}
          </h3>
        </div>

        {/* dinamicDescription */}
        <p
          className={`text-[10px] md:text-xs text-gray-500 leading-normal md:leading-6 transition-all duration-300
          ${
            isExpanded
              ? "line-clamp-none overflow-y-auto max-h-[80px] md:max-h-none text-right"
              : "line-clamp-1 md:line-clamp-2"
          }`}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
// finish
