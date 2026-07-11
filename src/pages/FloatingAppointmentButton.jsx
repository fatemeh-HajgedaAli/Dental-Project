import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import toothBtn from "../assets/images/dental/toothBtn.png";

export default function FloatingAppointmentButton({ visible }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 40,
          }}
          className="
          fixed
          bottom-6
          right-6
          z-[99999]
          "
        >
          <motion.button
            onClick={() => {
              if (open) {
                navigate("/appointment");
              } else {
                setOpen(true);
              }
            }}
            animate={{
              width: open ? 190 : 75,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            h-16
            rounded-full

            bg-white/80
            backdrop-blur-xl

            border
            border-sky-200

            shadow-[0_20px_50px_rgba(14,165,233,.25)]

            flex
            items-center
            justify-center
            gap-3

            overflow-hidden
            "
          >
            <motion.img
              src={toothBtn}
              alt=""
              className="
              w-12
              h-12
              object-contain
              "
              animate={{
                rotate: open ? 360 : 0,
              }}
              transition={{
                duration: 0.6,
              }}
            />

            <AnimatePresence>
              {open && (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  className="
                  text-sm
                  font-black
                  text-slate-800
                  whitespace-nowrap
                  "
                >
                  رزرو نوبت
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
