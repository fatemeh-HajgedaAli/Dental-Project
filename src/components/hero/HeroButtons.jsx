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
    <div
      className="relative w-[180px] h-[150px] flex flex-row items-center
       justify-end gap-2 "
    >
      <div
        className="mt-10 flex flex-row gap-2
       items-center lg:justify-end"
      >
        {/* main -Btn -tooth */}

        <div className="hidden lg:flex relative w-[200px] h-[180px] items-center justify-center">
          {!isFloating && (
            <Link to="/appointment" className="absolute inset-0 z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full h-full flex items-center justify-center cursor-pointer group"
              >
                <motion.img
                  layoutId="dental-shared-tooth"
                  src={toothBtn}
                  alt="Dental CTA"
                  className="absolute inset-0 w-full h-full 
                  object-contain pointer-events-none scale-100
                  group-hover:scale-135 transition-transform duration-300"
                  transition={{ type: "spring", stiffness: 150, damping: 22 }}
                />

                <span
                  className="relative z-10 text-slate-800 font-black text-base md:text-xs
                 select-none pr-1 tracking-wide"
                >
                  رزرو نوبت
                </span>
              </motion.div>
            </Link>
          )}
        </div>
        {/* btn2 */}
        <Link
          to="/services"
          className="
    relative flex w-[120px] h-[50px] mx-14 mt-[210px] lg:mt-0
    justify-center items-center group
    
    /* افکت شیشه‌ای (Glassmorphism) */
    bg-white/10 backdrop-blur-md 
    border border-white/20 
    rounded-lg shadow-lg
    
    /* هاور: شیشه پررنگ‌تر و شفاف‌تر می‌شود + سایه نئونی ملایم */
    hover:bg-white/25 hover:border-white/60
    hover:shadow-sky-500/10 hover:-translate-y-0.5
    
    transition-all duration-300 ease-out
  "
        >
          <span
            className="
      text-sm sm:text-base font-bold 
      text-slate-800 group-hover:text-sky-600 
      transition-colors duration-300 select-none
    "
          >
            خدمات ما
          </span>
        </Link>
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
