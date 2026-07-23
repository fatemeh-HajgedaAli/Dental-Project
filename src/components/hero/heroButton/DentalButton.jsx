import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonVariants = {
  primary: {
    wrapper:
      "border-sky-300/30 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600",
    text: "text-white",
    glow: "bg-cyan-300/20",
    shadow: "shadow-[0_12px_40px_rgba(14,165,233,0.28)]",
  },

  secondary: {
    wrapper: "border-white/30 bg-white/60 backdrop-blur-xl",
    text: "text-slate-700 group-hover:text-sky-600",
    glow: "bg-sky-400/10",
    shadow: "shadow-[0_12px_35px_rgba(15,23,42,0.08)]",
  },
};

export default function DentalButton({
  to,
  children,
  variant = "primary",
  onClick,
  className = "",
  ...props
}) {
  const styles = buttonVariants[variant] ?? buttonVariants.primary;

  const content = (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      onClick={onClick}
      className={`
        group
        relative
        isolate
        flex
        h-14
        min-w-[180px]
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        px-8
        cursor-pointer
        select-none
        transition-shadow
        duration-500

        ${styles.wrapper}
        ${styles.shadow}
        ${className}
      `}
      {...props}
    >
      {/* Main glow */}
      <span
        className={`
          pointer-events-none
          absolute
          -inset-6
          -z-10
          rounded-full
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
          ${styles.glow}
        `}
      />

      {/* Moving shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-1/2
          w-1/3
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-1000
          ease-out
          group-hover:translate-x-[500%]
        "
      />

      {/* Inner glass highlight */}
      <span
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[inherit]
          border
          border-white/20
        "
      />

      {/* Text */}
      <span
        className={`
          relative
          z-10
          text-sm
          font-bold
          tracking-wide
          transition-colors
          duration-300
          ${styles.text}
        `}
      >
        {children}
      </span>

      {/* Bottom indicator */}
      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          rounded-full
          bg-white
          opacity-80
          transition-all
          duration-500
          group-hover:w-2/3
        "
      />
    </motion.div>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="inline-flex"
        aria-label={typeof children === "string" ? children : undefined}
      >
        {content}
      </Link>
    );
  }

  return content;
}
