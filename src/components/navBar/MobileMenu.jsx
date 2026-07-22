import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { navLinks } from "./navLinks";
import TeethLogo from "../../assets/images/logos/LogoPng.png";
import { FiX } from "react-icons/fi";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-34 left-4 md:hidden z-[999999]">
      <div className="relative flex flex-col items-center">
        {/* ========================= */}
        {/* FLOATING TITLE */}
        {/* ========================= */}

        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 8,
                scale: 0.9,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                absolute
                -top-6
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                z-40
                px-3
                py-1
                rounded-full
                bg-white/95
                backdrop-blur-xl
                border
                border-sky-100
                shadow-md
                text-xs
                font-bold
                text-sky-700
              "
            >
              منوی سایت
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================= */}
        {/* MENU BUTTON */}
        {/* ========================= */}

        <motion.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          className="
            relative
            w-18
            h-18
            rounded-full
            bg-white/90
            backdrop-blur-xl
            shadow-[0_10px_35px_rgba(14,165,233,0.25)]
            border
            border-white
            flex
            items-center
            justify-center
            z-50
          "
        >
          {/* Animated Ring */}

          <motion.span
            className="
              absolute
              inset-[-5px]
              rounded-full
              border-2
              border-sky-200
              border-t-sky-600
            "
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />

          {/* ========================= */}
          {/* LOGO */}
          {/* ========================= */}

          <motion.img
            src={TeethLogo}
            alt="منوی سایت"
            className="w-11 h-11 object-contain"
            animate={{
              rotate: open ? 90 : 0,
              scale: open ? 0.7 : 1,
              opacity: open ? 0.2 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
          />

          {/* ========================= */}
          {/* CLOSE ICON */}
          {/* ========================= */}

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <FiX className="text-sky-700 text-3xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* ========================= */}
        {/* MENU ITEMS */}
        {/* ========================= */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
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
              }}
              className="
                absolute
                top-24
                left-1/2
                -translate-x-1/2
                flex
                flex-col
                items-center
                gap-3
              "
            >
              {navLinks.map(({ title, icon: Icon, to }) => (
                <motion.div
                  key={title}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    },
                    closed: {
                      opacity: 0,
                      y: -20,
                      scale: 0.5,
                    },
                  }}
                >
                  <Link
                    to={to}
                    smooth
                    spy
                    duration={700}
                    offset={-90}
                    onClick={() => setOpen(false)}
                    className="
                      group
                      relative
                      w-12
                      h-12
                      rounded-2xl
                      bg-white/95
                      backdrop-blur-xl
                      shadow-lg
                      border
                      border-sky-100
                      flex
                      items-center
                      justify-center
                      text-sky-700
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:bg-sky-600
                      hover:text-white
                      hover:scale-110
                    "
                  >
                    <Icon className="text-xl" />

                    {/* Tooltip */}

                    <span
                      className="
                        absolute
                        left-14
                        top-1/2
                        -translate-y-1/2
                        whitespace-nowrap
                        bg-slate-800
                        text-white
                        text-xs
                        px-3
                        py-1.5
                        rounded-lg
                        opacity-0
                        pointer-events-none
                        group-hover:opacity-100
                        transition-opacity
                      "
                    >
                      {title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
