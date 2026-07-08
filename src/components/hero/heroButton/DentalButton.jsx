import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { FaTooth } from "react-icons/fa";

export default function DentalButton({
  to = "/",
  children,
  variant = "primary",
}) {
  const primary = variant === "primary";

  return (
    <Link to={to}>
      <motion.div
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className={`
          relative
          flex
          items-center
          justify-center
          gap-3
          overflow-hidden
          rounded-2xl
          px-8
          h-14
          cursor-pointer
          transition-all
          duration-500
          group
          ${
            primary
              ? `
                min-w-[185px]
                bg-gradient-to-r
                from-sky-600
                via-cyan-500
                to-sky-500
                shadow-[0_20px_50px_rgba(14,165,233,.35)]
              `
              : `
                min-w-[170px]
                rounded-full
                border
                border-sky-200
                bg-white/75
                backdrop-blur-xl
                shadow-[0_10px_35px_rgba(15,23,42,.08)]
              `
          }
        `}
      >
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-r
            from-white/0
            via-white/20
            to-white/0
          "
        />

        {/* Shine */}
        <div
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            group-hover:translate-x-full
            transition-transform
            duration-1000
          "
        />

        {/* Icon */}
        <div
          className={`
            relative
            z-10
            flex
            items-center
            justify-center
            w-9
            h-9
            rounded-full
            transition
            ${primary ? "bg-white/20" : "bg-sky-50 group-hover:bg-sky-100"}
          `}
        >
          {primary ? (
            <FaTooth className="text-white text-lg" />
          ) : (
            <HiArrowLeft className="text-sky-600 text-lg transition-transform duration-300 group-hover:-translate-x-1" />
          )}
        </div>

        {/* Text */}
        <span
          className={`
            relative
            z-10
            font-bold
            tracking-wide
            ${
              primary ? "text-white" : "text-slate-700 group-hover:text-sky-600"
            }
          `}
        >
          {children}
        </span>

        {/* Border Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-[inherit]
            ring-1
            ring-white/0
            group-hover:ring-white/20
            transition
          "
        />
      </motion.div>
    </Link>
  );
}
