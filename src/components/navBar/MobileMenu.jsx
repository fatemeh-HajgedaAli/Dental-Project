// mobile menu
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiX } from "react-icons/fi";
import { navLinks } from "../../pages/main/homeLinks";
import TeethLogo from "../../assets/images/logos/LogoPng.png";

// Framer Motion Variants
const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0, scale: 1 },
  closed: { opacity: 0, y: -20, scale: 0.5 },
};

const tooltipVariants = {
  initial: { opacity: 0, x: -8 },
  animate: { opacity: 1, x: 0 },
};

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Background Dim Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[99998] md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="fixed top-8 right-7 md:hidden z-[99999]">
        <div className="relative flex flex-col items-center">
          {/* Floating Badge */}
          <AnimatePresence>
            {!open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-40 px-3 py-1 rounded-full bg-white/40 backdrop-blur-xl border border-sky-300 shadow-sm text-xs font-bold text-sky-700 pointer-events-none select-none"
              >
                منوی سایت
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Trigger */}
          <motion.button
            type="button"
            onClick={toggleMenu}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="relative w-11 h-11 rounded-full bg-white/90 backdrop-blur-xl shadow-lg shadow-sky-500/10 border border-white flex items-center justify-center z-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {/* Animated Outer Ring */}
            <motion.span
              className="absolute inset-[-4px] rounded-full border-2 border-sky-200 border-t-sky-600 pointer-events-none"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Logo */}
            <motion.img
              src={TeethLogo}
              alt="لوگوی سایت"
              className="w-8 h-8 object-contain pointer-events-none"
              animate={{
                rotate: open ? 90 : 0,
                scale: open ? 0.6 : 1,
                opacity: open ? 0 : 1,
              }}
              transition={{ duration: 0.25 }}
            />

            {/* Close Icon */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FiX className="text-sky-700 text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Navigation Items */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={containerVariants}
                className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40"
              >
                {navLinks.map(({ title, icon: Icon, to }) => (
                  <motion.div key={title} variants={itemVariants}>
                    <Link
                      to={to}
                      smooth
                      spy
                      duration={600}
                      offset={-90}
                      onClick={closeMenu}
                      className="group relative w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-xl shadow-md border border-sky-100 flex items-center justify-center text-sky-700 transition-colors duration-200 hover:bg-sky-600 hover:text-white"
                    >
                      <Icon className="text-xl" />

                      {/* Tooltip (RTL & LTR friendly) */}
                      <motion.span
                        variants={tooltipVariants}
                        className="absolute right-14 top-1/2 
                        -translate-y-1/2 whitespace-nowrap 
                        bg-slate-900/90 backdrop-blur-md text-white 
                        text-xs font-medium px-3 py-1.5 rounded-lg 
                        opacity-0 pointer-events-none group-hover:opacity-100
                         transition-opacity duration-200 shadow-md"
                      >
                        {title}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
