// FAQ-items
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
// START
export default function FAQItem({ question, answer, isOpen, onToggle }) {
  //  JSX
  return (
    <motion.div
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={`
        relative overflow-hidden rounded-3xl border
        transition-all duration-300 
        ${
          isOpen
            ? "border-cyan-700/30 bg-slate-900/100 shadow-[0_0_40px_rgba(34,211,238,.15)]"
            : "border-white/10 bg-white/[0.03] hover:border-cyan-900/40"
        }
      `}
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none
          ${
            isOpen
              ? "opacity-100 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"
              : "opacity-0"
          }`}
      />

      <button
        onClick={onToggle}
        className="relative z-10 flex w-full items-center justify-between px-6 py-5 text-right group"
      >
        <motion.h3
          layout
          className={`font-semibold text-base transition-colors duration-300 ${
            isOpen ? "text-cyan-400" : "text-slate-200 group-hover:text-sky-900"
          }`}
        >
          {question}
        </motion.h3>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}
          className={`
            flex h-10 w-10 items-center justify-center rounded-full
            border transition-all duration-300
            ${
              isOpen
                ? "border-cyan-400 bg-cyan-500/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.4)]"
                : "border-slate-700 bg-slate-800 text-slate-400 group-hover:border-cyan-500 group-hover:text-cyan-300"
            }
          `}
        >
          <Plus size={20} strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 15 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative px-6 pb-6"
            >
              <div className="mb-5 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              <p className="leading-8 text-slate-400">{answer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
// FINISH
