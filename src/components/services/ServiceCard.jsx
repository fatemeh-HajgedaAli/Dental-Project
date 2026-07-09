import { useState } from "react";
import { motion } from "framer-motion";

export default function ServiceCard({
  service,
  x,
  y,
  scale = 1,
  opacity = 1,
  zIndex = 1,
}) {
  const Icon = service.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => setIsExpanded((prev) => !prev)}
      className={`
        absolute
        /* ⚡ قرار دادن مرکز کارت دقیقاً بر روی نقطه صفر مختصات مدار */
        lg:left-1/2 lg:right-45
        left-1/2 
        -translate-x-1/2 -translate-y-1/2
      
        /* ⚡ عرض کاملاً ریسپانسیو: موبایل کوچک (150px) تا دسکتاپ (280px) */
        w-[150px] sm:w-[220px] md:w-[260px] lg:w-[280px]
        bg-white
        rounded-2xl
        border
        border-sky-200
        shadow-xl
        p-2 md:p-3
        flex
        flex-col
        md:flex-row
        gap-2
        items-center md:items-start
        cursor-pointer
        hover:border-sky-500
        transition-colors duration-300
      `}
      style={{
        x,
        y,
        scale: isExpanded ? scale * 1.05 : scale,
        opacity: isExpanded ? 1 : opacity,
        zIndex: isExpanded ? 999 : zIndex,
      }}
      whileHover={
        !isExpanded
          ? {
              scale: scale * 1.05,
              opacity: 1,
              zIndex: 50,
            }
          : undefined
      }
    >
      {/* تصویر سرویس */}
      <div
        className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20
       rounded-full overflow-hidden border border-sky-400 shrink-0"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* محتوای متنی */}
      <div className="text-center md:text-right flex-1 min-w-0 w-full">
        <div className="flex items-center justify-center md:justify-start gap-2">
          {Icon && <Icon size={14} className="text-sky-600 hidden md:block" />}
          <h3 className="font-bold text-[10px] sm:text-xs md:text-sm truncate w-full">
            {service.title}
          </h3>
        </div>

        <p
          className={`
          mt-1
          text-[9px]
          md:text-xs
          text-gray-500
          leading-5
          transition-all
          ${
            isExpanded
              ? "max-h-[100px] overflow-y-auto text-right"
              : "line-clamp-1 md:line-clamp-2"
          }
          `}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
