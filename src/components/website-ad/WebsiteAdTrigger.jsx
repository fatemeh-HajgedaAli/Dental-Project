
import { motion } from "framer-motion";
import WebsiteAdIcon from "./WebsiteAdIcon";

export default function WebsiteAdTrigger({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="مشاهده خدمات ASK.DEV"
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      className="
        group
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-[18px]
        border
        border-white/10
        bg-[#17262c]/95
        text-[#8bbcc8]
        shadow-[0_15px_45px_rgba(20,45,55,0.35)]
        backdrop-blur-xl
      "
    >
      {/* Outer Glow */}
      <span
        className="
          pointer-events-none
          absolute
          -inset-2
          rounded-[22px]
          bg-[#8bbcc8]/10
          opacity-60
          blur-xl
          transition-all
          duration-500
          group-hover:bg-[#c3a46b]/15
        "
      />

      {/* Rotating Ring */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[18px]
          border
          border-dashed
          border-[#8bbcc8]/20
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Inner Glow */}
      <span
        className="
          absolute
          inset-1
          rounded-[15px]
          bg-gradient-to-br
          from-[#8bbcc8]/10
          via-transparent
          to-[#c3a46b]/10
        "
      />

      {/* Icon */}
      <span className="relative z-10">
        <WebsiteAdIcon />
      </span>

      {/* Online Status */}
      <span className="absolute -right-1 -top-1 z-20 flex h-4 w-4 items-center justify-center">
        <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/40" />

        <span
          className="
            relative
            h-2.5
            w-2.5
            rounded-full
            border-2
            border-[#17262c]
            bg-emerald-400
            shadow-[0_0_10px_rgba(52,211,153,0.7)]
          "
        />
      </span>
    </motion.button>
  );
}

