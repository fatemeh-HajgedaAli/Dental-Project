import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { navLinks } from "./navLinks";
import TeethLogo from "../../assets/images/logos/LogoPng.png";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 right-4 md:hidden z-[999999]">
      <div className="flex flex-col items-center">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-xl shadow-xl border border-sky-100 flex items-center justify-center"
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
            y: open ? 12 : -20,
            scale: open ? 1 : 0.8,
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
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-sky-700 hover:bg-sky-50 cursor-pointer"
            >
              <Icon className="text-xl" />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
