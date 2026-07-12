import { useState, useEffect } from "react";
import { navLinks } from "./navLinks";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import TeethLogo from "../../assets/images/logos/LogoPng.png";

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
            key="desktop"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-4 relative z-40"
          >
            {navLinks.map(({ title, icon: Icon, to }) => (
              <li key={title}>
                <Link
                  to={to}
                  smooth
                  duration={700}
                  offset={-90}
                  spy
                  className="relative flex items-center gap-2 py-2 px-3 text-sky-700 cursor-pointer"
                >
                  <Icon />
                  <span>{title}</span>

                  <motion.div
                    className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-sky-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            key="floating"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-6 right-8 z-[999999] flex flex-col items-center"
          >
            <button
              onClick={() => setOpen(!open)}
              className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl shadow-xl border border-sky-100 flex items-center justify-center"
            >
              <motion.img
                src={TeethLogo}
                alt=""
                className="w-11"
                animate={{ rotate: open ? 180 : 0 }}
              />
            </button>

            <motion.div
              initial={false}
              animate={{
                opacity: open ? 1 : 0,
                scale: open ? 1 : 0.8,
                y: open ? 12 : -20,
                pointerEvents: open ? "auto" : "none",
              }}
              className="mt-3 w-16 rounded-3xl bg-white/95 backdrop-blur-xl shadow-xl p-3 flex flex-col gap-3 border border-sky-100"
            >
              {navLinks.map(({ title, icon: Icon, to }) => (
                <Link
                  key={title}
                  to={to}
                  smooth
                  spy
                  duration={700}
                  offset={-90}
                  onClick={() => setOpen(false)}
                  className="group w-10 h-10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-sky-50 text-sky-700 relative"
                >
                  <Icon className="text-xl" />

                  <span className="absolute right-20 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition">
                    {title}
                  </span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
