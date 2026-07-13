// floating-btn
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toothBtn from "../assets/images/dental/toothBtn.png";
// start
export default function FloatingAppointmentButton({ visible }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // jsx
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          className="fixed bottom-6 right-6 z-[99999] flex flex-col items-center"
        >
          {/* راهنمای شناور (Tooltip) بالای دکمه - فقط زمانی که دکمه بسته است نشان داده می‌شود */}
          <AnimatePresence>
            {!open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  // ایجاد افکت حرکت ملایم عمقی برای جلب توجه کاربر
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute -top-10 bg-slate-900/90 text-sky-400 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-md border border-sky-500/30 whitespace-nowrap backdrop-blur-sm"
              >
                رزرو نوبت آنلاین
                {/* فلش کوچک زیر تولتیپ */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900/90 rotate-45 border-r border-b border-sky-500/30" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* دکمه اصلی */}
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
              relative
            "
          >
            {/* افکت پالس یا هاله نور دور دکمه زمانی که بسته است تا کاربر را ترغیب به کلیک کند */}
            {!open && (
              <span className="absolute inset-0 rounded-full bg-sky-400/10 animate-ping pointer-events-none" />
            )}

            <motion.img
              src={toothBtn}
              alt="Tooth Icon"
              className="w-12 h-12 object-contain relative z-10"
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
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-sm font-black text-slate-800 whitespace-nowrap"
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
// finish
