import { useEffect } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

import toothBtn from "../../../assets/images/dental/toothBtn.png";

export default function ToothDraggable({ isFloating = false }) {
  const navigate = useNavigate();

  const x = useMotionValue(0);

  /* =========================
     Animated Values
  ========================= */

  const rotate = useTransform(x, [0, 150], [0, 360]);

  const iconScale = useTransform(x, [0, 150], [1, 1.2]);

  const textOpacity = useTransform(x, [0, 80], [1, 0]);

  const textX = useTransform(x, [0, 80], [0, -20]);

  const blurValue = useTransform(x, [0, 100], [0, 5]);

  const textBlur = useMotionTemplate`
    blur(${blurValue}px)
  `;

  const hintOpacity = useTransform(x, [0, 60, 120], [0.4, 1, 0]);

  /* =========================
     Reset Drag Position
  ========================= */

  useEffect(() => {
    x.set(0);
  }, [isFloating, x]);

  /* =========================
     Drag End
  ========================= */

  const handleDragEnd = async (_, info) => {
    if (info.offset.x > 100) {
      await animate(x, 150, {
        duration: 0.18,
        ease: "easeOut",
      });

      navigate("/appointment");
      return;
    }

    animate(x, 0, {
      type: "spring",
      stiffness: 500,
      damping: 30,
    });
  };

  return (
    <motion.div
      initial={
        isFloating
          ? {
              opacity: 0,
              scale: 0.8,
              y: 30,
            }
          : {
              opacity: 1,
              scale: 1,
              y: 0,
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={
        isFloating
          ? {
              opacity: 0,
              scale: 0.8,
              y: 30,
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 24,
      }}
      className={`
        group
        relative
        flex
        h-14
        w-[250px]
        items-center
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-gradient-to-r
        from-slate-950
        via-blue-950
        to-sky-900
        shadow-[0_15px_45px_rgba(2,132,199,0.28)]
        backdrop-blur-2xl

        ${
          isFloating
            ? "fixed bottom-6 left-5 z-[9999] sm:bottom-8 sm:left-8"
            : "hidden lg:flex"
        }
      `}
    >
      {/* =========================
          Animated Shine
      ========================= */}

      <motion.div
        animate={{
          x: ["-150%", "150%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-1/3
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* =========================
          Soft Glow
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-10
          bg-sky-400/10
          blur-3xl
        "
      />

      {/* =========================
          Drag Hint
      ========================= */}

      <motion.div
        style={{
          opacity: hintOpacity,
        }}
        className="
          pointer-events-none
          absolute
          left-14
          flex
          items-center
        "
      >
        {[1, 2, 3].map((item) => (
          <IoMdArrowDropright
            key={item}
            className="
              text-lg
              text-sky-300
              animate-pulse
            "
          />
        ))}
      </motion.div>

      {/* =========================
          Text
      ========================= */}

      <motion.span
        style={{
          opacity: textOpacity,
          x: textX,
          filter: textBlur,
        }}
        className="
          pointer-events-none
          absolute
          right-5
          z-10
          select-none
          text-sm
          font-bold
          text-white
        "
      >
        بکشید برای رزرو نوبت
      </motion.span>

      {/* =========================
          Drag Handle
      ========================= */}

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 150,
        }}
        dragElastic={0.05}
        dragMomentum={false}
        style={{
          x,
        }}
        onDragEnd={handleDragEnd}
        whileTap={{
          scale: 0.95,
        }}
        className="
          absolute
          left-1
          top-1
          bottom-1
          z-20
          aspect-square
          cursor-grab
          rounded-full
          bg-white
          shadow-[0_5px_20px_rgba(255,255,255,0.25)]
          active:cursor-grabbing
        "
      >
        {/* Inner Ring */}

        <div
          className="
            absolute
            inset-1
            rounded-full
            border
            border-sky-100
          "
        />

        {/* Tooth */}

        <motion.img
          src={toothBtn}
          alt="رزرو نوبت"
          draggable={false}
          style={{
            rotate,
            scale: iconScale,
          }}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-7
            w-7
            -translate-x-1/2
            -translate-y-1/2
            object-contain
            pointer-events-none
          "
        />
      </motion.div>
    </motion.div>
  );
}
