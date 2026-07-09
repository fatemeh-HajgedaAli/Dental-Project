import { useState, useEffect } from "react";
import { navLinks } from "./navLinks";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TeethLogo from "../../assets/images/logos/LogoPng.png";

const MotionNavLink = motion(NavLink);
// start
export default function DesktopMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:block">
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.ul
            key="desktop-linear"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex gap-4 lg:gap-2 items-center relative z-40"
          >
            {navLinks.map(({ title, icon: Icon, to }) => (
              <li key={title}>
                <MotionNavLink
                  to={to}
                  className="relative flex justify-center items-center gap-2 py-2 px-3 text-sky-700 text-sm lg:text-base whitespace-nowrap"
                  initial="rest"
                  whileHover="hover"
                >
                  <Icon />
                  <span>{title}</span>
                  <motion.div
                    className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-sky-600"
                    variants={{
                      rest: { scaleX: 0, originX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </MotionNavLink>
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            key="desktop-floating"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-6 right-8 z-[999999] flex flex-col items-center pointer-events-auto"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl shadow-2xl flex items-center justify-center relative z-[55] border border-sky-100 cursor-pointer"
            >
              <motion.img
                src={TeethLogo}
                alt="logo"
                className="w-11 pointer-events-none"
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>

            <motion.div
              initial={false}
              animate={{
                opacity: open ? 1 : 0,
                y: open ? 12 : -20,
                scale: open ? 1 : 0.8,
                pointerEvents: open ? "auto" : "none",
              }}
              transition={{ duration: 0.25 }}
              className="mt-3 w-16 rounded-3xl bg-white/95 backdrop-blur-xl shadow-xl p-3 flex flex-col items-stretch gap-3 border border-sky-100 z-[50]"
            >
              {navLinks.map(({ title, icon: Icon, to }) => (
                <NavLink
                  key={title}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `
                    w-full h-10 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-200 relative group
                    ${isActive ? "bg-sky-100 text-sky-600 shadow-sm" : "text-sky-800 hover:bg-sky-50"}
                  `}
                >
                  <Icon className="text-xl flex-shrink-0" />
                  <span className="absolute right-20 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {title}
                  </span>
                </NavLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
