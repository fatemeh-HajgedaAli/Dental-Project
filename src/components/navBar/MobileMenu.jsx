import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./navLinks";
import { NavLink } from "react-router-dom";
import TeethLogo from "../../assets/images/logos/LogoPng.png";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    // مقدار z-index را به ماکزیمم رساندیم و pointer-events-auto دادیم
    <div className="fixed top-6 right-4 md:hidden z-[999999] pointer-events-auto">
      <div className="flex flex-col items-center justify-center">
        {/* دکمه لوگو */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // جلوگیری از پخش شدن کلیک در صفحه
            setOpen(!open);
          }}
          className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-xl
           shadow-xl flex items-center justify-center relative z-[55] border border-sky-100 cursor-pointer"
        >
          <motion.img
            src={TeethLogo}
            alt="logo"
            className="w-11 pointer-events-none" // تصویر مانع کلیک دکمه نشود
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* کانتینر آیتم‌ها */}
        <motion.div
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            y: open ? 12 : -20,
            scale: open ? 1 : 0.8,
            pointerEvents: open ? "auto" : "none",
          }}
          transition={{ duration: 0.25 }}
          className="mt-3 w-16 rounded-3xl bg-white/95 
          backdrop-blur-xl shadow-xl p-3 flex flex-col 
          items-stretch gap-3 border border-sky-100 z-[50]"
        >
          {navLinks.map(({ title, icon: Icon, to }) => (
            <NavLink
              key={title}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                w-full 
                h-10 
                rounded-2xl 
                flex 
                items-center 
                justify-center 
                text-sm 
                font-bold
                transition-all
                duration-200
                ${isActive ? "bg-sky-100 text-sky-600 shadow-sm" : "text-sky-800 hover:bg-sky-50"}
              `}
              title={title}
            >
              <Icon className="text-xl flex-shrink-0" />
            </NavLink>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
