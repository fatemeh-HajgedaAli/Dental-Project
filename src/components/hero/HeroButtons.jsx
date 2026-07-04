// HeroButtons.jsx
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toothBtn from "../../assets/images/dental/toothBtn.png";
// START
export default function HeroButtons() {
  const { scrollY } = useScroll();
  const [isFloating, setIsFloating] = useState(false);
  const [startWobble, setStartWobble] = useState(false);
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const active = latest > 150;
    setIsFloating(active);
    if (!active) setStartWobble(false);
  });

  const handleClick = () => {
    navigate("/appointment");
  };
  // JSX
  return (
    <div className="mt-10 flex flex-row gap-8 items-center justify-center lg:justify-end w-full">
      {/* Secondary CTA */}
      <Link
        to="/services"
        className="hidden  lg:flex group relative text-sm sm:text-base md:text-lg font-semibold text-slate-500 hover:text-slate-800 transition-colors duration-300"
      >
        مشاهده خدمات
        <span className="absolute bottom-[-4px] right-0 w-0 h-[1px] bg-slate-400 group-hover:w-full transition-all duration-300" />
      </Link>

      {/* BTN */}
      <div className="relative w-[150px] h-[150px] flex items-center justify-center  bottom-1/6 right-12">
        {!isFloating && (
          <Link to="/appointment" className="absolute inset-0 z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full h-full flex items-center justify-center cursor-pointer group "
            >
              <motion.img
                layoutId="dental-shared-tooth"
                src={toothBtn}
                alt="Dental CTA"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                transition={{ type: "spring", stiffness: 150, damping: 22 }}
              />

              <span className="relative z-10 text-slate-800 font-black text-sm md:text-base select-none pb-2 tracking-wide">
                رزرو نوبت
              </span>
            </motion.div>
          </Link>
        )}
      </div>
      {/* FLOATING TOOTH */}
      <AnimatePresence>
        {isFloating && (
          <motion.button
            onClick={handleClick}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="fixed bottom-6 right-6 z-50 w-[82px] h-[82px] rounded-full bg-white/70
             backdrop-blur-md border border-slate-200
              shadow-[0_12px_30px_rgba(14,165,233,0.15)] flex items-center justify-center cursor-pointer group"
          >
            <span className="absolute inset-0 rounded-full bg-sky-400/10 blur-xl opacity-100" />

            <motion.img
              layoutId="dental-shared-tooth"
              src={toothBtn}
              alt="Dental CTA Floating"
              className="absolute w-full h-full object-contain pointer-events-none scale-90 z-10"
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
              onLayoutAnimationComplete={() => setStartWobble(true)}
              animate={
                startWobble
                  ? {
                      rotate: [0, 5, -5, 0],
                      y: [-2, 3, -2],
                    }
                  : { rotate: 0, y: 0 }
              }
              transition={
                startWobble
                  ? {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : { duration: 0.2 }
              }
            />

            <span className="relative z-10 text-slate-800 font-black text-sm md:text-base select-none pb-2 tracking-wide">
              رزرو نوبت
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
