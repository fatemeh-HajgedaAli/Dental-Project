// hero-Btn
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoMdCalendar } from "react-icons/io";
// icon
import { FaHandPointer } from "react-icons/fa";
// parts
import DentalButton from "./heroButton/DentalButton";
import ToothDraggable from "./heroButton/ToothDraggable";
import toothBtn from "../../assets/images/dental/toothBtn.png";
// start
export default function HeroButtons() {
  const { scrollY } = useScroll();

  const [showFloating, setShowFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowFloating(latest > 250);
  });
  // jsx
  return (
    <>
      {/* =========================================
          HERO BUTTONS
      ========================================= */}

      <AnimatePresence mode="wait">
        {!showFloating && (
          <motion.div
            key="hero-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              absolute
              right-6
              lg:right-28
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            {/* رزرو نوبت */}
            <ToothDraggable isFloating={false} />

            {/* خدمات */}
            <DentalButton
              to="/services"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              خدمات ما
            </DentalButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          FLOATING APPOINTMENT TOGGLE
      ========================================= */}

      <AnimatePresence>
        {showFloating && (
          <motion.div
            key="floating-toggle"
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 30,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
            }}
            className="
              fixed
              bottom-6
              right-6
              z-[99999]
            "
          >
            <FloatingToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================
   FLOATING TOGGLE
========================================= */

function FloatingToggle() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) {
      navigate("/appointment");
      return;
    }

    setOpen(true);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={false}
      animate={{
        width: open ? 220 : 175,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
        group
        relative
        flex
        h-[64px]
        items-center
        gap-3
        overflow-hidden
        rounded-full
        border
        border-sky-300/40
        bg-gradient-to-r
        from-slate-950
        via-blue-950
        to-sky-900
        px-2
        shadow-[0_20px_50px_rgba(14,165,233,0.30)]
        backdrop-blur-2xl
      "
    >
      {/* =================================
          GLOW
      ================================= */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-sky-400/10
          via-blue-500/10
          to-transparent
        "
      />

      {/* =================================
          SHINE
      ================================= */}

      <motion.span
        animate={{
          x: ["-150%", "250%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
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
          via-white/15
          to-transparent
        "
      />

      {/* =================================
          PULSE - CLOSED
      ================================= */}

      {!open && (
        <motion.span
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-sky-300/50
          "
        />
      )}

      {/* =================================
          TOOTH ICON
      ================================= */}

      <div
        className="
          relative
          z-10
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-lg
        "
      >
        <motion.img
          src={toothBtn}
          alt="رزرو نوبت"
          animate={{
            rotate: open ? 360 : 0,
            y: [0, -2, 0],
          }}
          transition={{
            rotate: {
              duration: 0.5,
            },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            h-8
            w-8
            object-contain
          "
        />
      </div>

      {/* =================================
          TEXT
      ================================= */}

      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            key="closed"
            initial={{
              opacity: 0,
              x: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -10,
            }}
            className="
              relative
              z-10
              flex
              items-start
            "
          >
            <span
              className="
              text-sm
                font-black
                text-white
              "
            >
              رزرو آنلاین
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{
              opacity: 0,
              x: 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -15,
            }}
            className="
              relative
              z-10
              flex
              items-center
              gap-2
            "
          >
            <IoMdCalendar
              className="
                text-xl
                text-sky-300
              "
            />

            <span
              className="
                text-sm
                font-black
                text-white
              "
            >
              انتخاب زمان نوبت
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================
          ACTION INDICATOR
      ================================= */}

      {!open && (
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      relative
      z-10
      mr-auto
      ml-2
      flex
      items-center
      justify-center
      text-sky-100
    "
        >
          <FaHandPointer
            size={20}
            className="text-base rotate-45 drop-shadow-sm"
          />
        </motion.div>
      )}
    </motion.button>
  );
}
