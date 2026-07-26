import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 3500;
    const intervalTime = 35;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete?.();
          }, 500);

          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-slate-950
        text-white
        select-none
      "
      dir="rtl"
    >
      {/* =================================
          Background Ambient Glow
      ================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[300px]
            h-[300px]
            sm:w-[600px]
            sm:h-[600px]
            rounded-full
            bg-sky-500/20
            blur-[120px]
          "
        />

        {/* Top Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-40
            -right-40
            w-[350px]
            h-[350px]
            rounded-full
            bg-blue-600/10
            blur-[100px]
          "
        />

        {/* Bottom Glow */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -left-40
            w-[350px]
            h-[350px]
            rounded-full
            bg-cyan-500/10
            blur-[100px]
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            bg-[size:50px_50px]
          "
        />
      </div>

      {/* =================================
          Main Content
      ================================= */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo / Brand */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center"
        >
          {/* Logo Circle */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              relative
              flex
              items-center
              justify-center
              w-20
              h-20
              sm:w-24
              sm:h-24
              rounded-full
              border
              border-sky-400/20
            "
          >
            <div
              className="
                absolute
                inset-2
                rounded-full
                border
                border-dashed
                border-sky-400/30
              "
            />

            <div
              className="
                flex
                items-center
                justify-center
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-full
                bg-gradient-to-br
                from-sky-400
                to-blue-600
                shadow-[0_0_40px_rgba(14,165,233,0.4)]
              "
            >
              <span className="text-2xl sm:text-3xl">✦</span>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="
              mt-7
              text-2xl
              sm:text-3xl
              font-extrabold
              font-peyda
              tracking-tight
              bg-gradient-to-r
              from-sky-300
              via-white
              to-blue-400
              bg-clip-text
              text-transparent
            "
          >
            لبخندی زیبا،
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="
              mt-2
              text-xs
              sm:text-sm
              text-slate-400
              font-medium
            "
          >
            آغاز یک زندگی بهتر
          </motion.p>
        </motion.div>

        {/* =================================
            Percentage
        ================================= */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-14
            flex
            items-baseline
            font-black
          "
        >
          <motion.span
            className="
              text-6xl
              sm:text-8xl
              tracking-[-0.06em]
              tabular-nums
              bg-gradient-to-b
              from-white
              to-slate-500
              bg-clip-text
              text-transparent
            "
          >
            {Math.round(count)}
          </motion.span>

          <span
            className="
              mr-2
              text-2xl
              sm:text-3xl
              font-bold
              text-sky-400
            "
          >
            %
          </span>
        </motion.div>

        {/* =================================
            Progress Bar
        ================================= */}
        <div className="mt-7 w-64 sm:w-80">
          {/* Progress Background */}
          <div
            className="
              relative
              h-[3px]
              w-full
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            {/* Progress */}
            <motion.div
              className="
                absolute
                right-0
                top-0
                h-full
                rounded-full
                bg-gradient-to-l
                from-cyan-300
                via-sky-500
                to-blue-600
                shadow-[0_0_15px_rgba(14,165,233,0.7)]
              "
              style={{
                width: `${count}%`,
              }}
            />
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="
              mt-4
              flex
              items-center
              justify-between
              text-[10px]
              text-slate-500
            "
          >
            <span>در حال آماده‌سازی</span>

            <span className="text-slate-600">لطفاً صبر کنید</span>
          </motion.div>
        </div>

        {/* =================================
            Bottom Label
        ================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
            mt-16
            flex
            items-center
            gap-2
            text-[10px]
            tracking-widest
            text-slate-600
          "
        >
          <span className="h-px w-8 bg-slate-700" />

          <span>MODERN DENTISTRY</span>

          <span className="h-px w-8 bg-slate-700" />
        </motion.div>
      </div>
    </motion.div>
  );
}
