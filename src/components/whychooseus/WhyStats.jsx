import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

/* ---------------- Persian Counter ---------------- */

const toPersianDigits = (num) => {
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return num.toString().replace(/[0-9]/g, (w) => id[+w]);
};

function Counter({ value }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  const persianToEng = (str) =>
    str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  const clean = persianToEng(value);

  const numericValue = parseInt(clean.replace(/[^0-9]/g, ""), 10) || 0;

  const suffix = value.replace(/[۰-۹0-9]/g, "");

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const [displayValue, setDisplayValue] = useState("۰");

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, numericValue, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [count, numericValue, inView]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      setDisplayValue(toPersianDigits(v));
    });
  }, [rounded]);

  return (
    <span ref={ref} dir="rtl">
      {suffix === "+" ? `${suffix}${displayValue}` : `${displayValue}${suffix}`}
    </span>
  );
}

/* ---------------- Animations ---------------- */

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.94,
    filter: "blur(16px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export default function WhyStats({ stats = [] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-3 gap-2 
       w-full lg:max-w-xl mx-auto my-4 "
    >
      {stats.map((item, index) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            y: -12,
            scale: 1.04,
          }}
          className="
            group
            relative
            w-30 h-30
            lg:w-40 lg:h-30
            lg:-top-8
            overflow-hidden
            rounded-xl
            border border-white/15
            pu-4
            py-4
            lg:py-0
            items-center
            text-center
            shadow-[0_25px_70px_rgba(0,0,0,.35)]
            transition-all
            duration-500
          "
        >
          {/* Border Glow */}
          <div
            className="absolute inset-0 rounded-full borde-3 
          border-cyan-400/0 group-hover:border-cyan-400/30 
          transition-all duration-500"
          />

          {/* Top Highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Aurora Glow */}
          <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

          {/* Shine Effect */}
          <div
            className="
              absolute
              top-0
              left-[-120%]
              h-full
              w-1/2
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              group-hover:left-[150%]
              transition-all
              duration-[1400ms]
            "
          />

          {/* Number */}
          <motion.h3
            whileHover={{ scale: 1.08 }}
            className="
              relative
              z-10
              text-xl
              pt-2
              lg:pt-8
              font-black
              tracking-tight
              text-transparent
              bg-gradient-to-b
              from-white
              via-cyan-200
              to-cyan-400
              bg-clip-text
              drop-shadow-[0_0_18px_rgba(34,211,238,.45)]
            "
          >
            <Counter value={item.number} />
          </motion.h3>

          {/* Divider */}
          <div
            className="mx-auto mt-2 mb-2 h-px w-20 
          bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          />

          {/* Title */}
          <p
            className="
              relative
              z-10
              text-xs
              font-medium
              leading-7
              tracking-wide
              text-slate-300
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            {item.title}
          </p>

          {/* Bottom Glow */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </motion.div>
      ))}
    </motion.div>
  );
}
