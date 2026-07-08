import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toothBtn from "../../../assets/images/dental/toothBtn.png";

export default function FloatingAppointmentButton({
  visible,
  startWobble,
  setStartWobble,
}) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => navigate("/appointment")}
          initial={{ opacity: 0, scale: 0.6, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 40 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="
            fixed bottom-6 right-6 z-50
            w-24 h-24
            rounded-full
            bg-white/80
            backdrop-blur-2xl
            border border-sky-200
            shadow-[0_25px_60px_rgba(14,165,233,.22)]
            flex items-center justify-center
            overflow-hidden
          "
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200/40 to-cyan-300/10" />

          <motion.img
            layoutId="appointment-tooth"
            src={toothBtn}
            alt=""
            className="absolute w-full h-full object-contain scale-90"
            onLayoutAnimationComplete={() => setStartWobble(true)}
            animate={
              startWobble
                ? {
                    rotate: [0, 5, -5, 0],
                    y: [0, -4, 0],
                  }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span className="relative z-10 text-xs font-black text-slate-800 pb-2">
            رزرو نوبت
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
