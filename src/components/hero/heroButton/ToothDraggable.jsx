import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toothBtn from "../../../assets/images/dental/toothBtn.png";

export default function ToothDraggable({ isFloating }) {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    x.set(0);
  }, [isFloating, x]);

  const textOpacity = useTransform(x, [0, 80], [1, 0]);
  const textX = useTransform(x, [0, 80], [0, 15]);

  function handleDragEnd(event, info) {
    setIsActive(false);
    if (info.offset.x > 80) {
      navigate("/contact");
    }
  }

  const floatingAnimation = {
    initial: { opacity: 0, scale: 0.85, y: 40 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.85, y: 40 },
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 24,
    },
  };

  return (
    <motion.div
      {...(isFloating ? floatingAnimation : {})}
      drag="x"
      dragConstraints={{ left: 0, right: 160 }}
      dragElastic={0.15}
      style={{ x }}
      onDragStart={() => setIsActive(true)}
      onDragEnd={handleDragEnd}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onTapStart={() => setIsActive(true)}
      onTap={() => setIsActive(false)}
      onTapCancel={() => setIsActive(false)}
      whileHover={{
        scale: 1.03,
        y: isFloating ? 0 : -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={() => {
        if (Math.abs(x.get()) < 5) {
          navigate("/contact");
        }
      }}
      className={`
        items-center
        justify-center
        gap-3
        overflow-hidden
        h-14
        px-1
        w-[190px]
        rounded-full
        border border-white/20
        backdrop-blur-sm
        ring-1 ring-white/10
        shadow-[0_12px_40px_rgba(14,165,233,.18)]
        transition-all
        duration-500
        select-none
        cursor-grab
        active:cursor-grabbing

        ${
          isFloating
            ? "!fixed !flex bottom-10 rounded-full left-4 flex-row-reverse bg-slate-900/90 !z-[999999]"
            : "hidden lg:flex relative w-20 lg:w-[190px] z-10"
        }
      `}
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-500
        bg-gradient-to-r from-white/0 via-white/25 to-white/0
        ${isActive ? "opacity-100" : "opacity-0"}`}
      />

      {/* Moving Aurora */}
      <div
        className={`absolute inset-0 -skew-x-12
        bg-gradient-to-r
        from-transparent
        via-sky-300/30
        to-transparent
        transition-transform duration-1000
        ${isActive ? "translate-x-full" : "-translate-x-full"}`}
      />

      {/* Soft radial glow */}
      <div className="absolute inset-0 rounded-full bg-sky-400/5 blur-sm items-center" />
      <div className="relative z-10 flex items-center justify-center">
        <img
          src={toothBtn}
          alt="Tooth"
          draggable={false}
          className={`w-8 h-10 object-contain transition-all duration-500
          drop-shadow-[0_0_12px_rgba(255,255,255,.4)]
          ${isActive ? "rotate-12 scale-110" : ""}`}
        />
      </div>
      <div className="relative z-10 flex items-center gap-2">
        <motion.span
          style={{
            opacity: textOpacity,
            x: textX,
          }}
          className={`font-semibold tracking-wide text-center pr-10 transition-all duration-300
          ${isActive ? "text-sky-100" : "text-white/80"}`}
        >
          رزرو نوبت
        </motion.span>

        <div
          className={`absolute right-4 text-xs font-bold text-sky-200 pt-2 pointer-events-none transition-all duration-300
          ${isActive ? "opacity-80 translate-x-1" : "opacity-0"}`}
        >
          ▶▶
        </div>
      </div>
    </motion.div>
  );
}
