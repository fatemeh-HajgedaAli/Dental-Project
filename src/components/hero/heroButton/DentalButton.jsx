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
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`
          group
          relative
          overflow-hidden
          flex
          items-center
          justify-center
          gap-3
          h-14
          px-8
          cursor-pointer
          select-none
          rounded-2xl
          transition-all
          duration-500

          ${
            primary
              ? `
              min-w-[190px]
              border border-sky-300/20
              bg-gradient-to-br
              from-sky-500
              via-cyan-500
              to-blue-600

              shadow-[0_15px_50px_rgba(14,165,233,.35)]
            `
              : `
              min-w-[180px]
              border border-white/20
              bg-white/10
              backdrop-blur-2xl
              ring-1 ring-white/10
              shadow-[0_15px_40px_rgba(15,23,42,.08)]
            `
          }
        `}
      >
        {/* Background Glow */}
        <div
          className={`
            absolute
            inset-0
            rounded-[inherit]
            ${primary ? "bg-cyan-300/10" : "bg-sky-400/5"}
            blur-2xl
          `}
        />

        {/* Aurora */}
        <div
          className="
            absolute
            -left-1/2
            top-0
            h-full
            w-1/2
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-[300%]
          "
        />

        {/* Floating light */}
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

       

        {/* Text */}
        <span
          className={`
            relative
            z-10

            font-semibold
            tracking-wide
            text-[15px]

            transition-all
            duration-300

            ${
              primary ? "text-white" : "text-slate-700 group-hover:text-sky-600"
            }
          `}
        >
          {children}
        </span>

        {/* Animated Border */}
        <div
          className="
            absolute
            inset-0
            rounded-[inherit]

            ring-1
            ring-white/0

            group-hover:ring-white/20

            transition-all
            duration-500
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2

            h-[2px]
            w-0

            -translate-x-1/2

            bg-white/80

            transition-all
            duration-500

            group-hover:w-4/5
          "
        />
      </motion.div>
    </Link>
  );
}
