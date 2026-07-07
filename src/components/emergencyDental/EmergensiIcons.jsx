// icons-modals
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// icons
import { FiX } from "react-icons/fi";

// data
import { iconData } from "./emergencey.data";

export default function EmergensiIcons() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="absolute inset-0 z-30 pointer-events-none" dir="rtl">
      {iconData.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            // scroll reveal animation
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
              ease: "easeOut",
            }}
            onClick={() => setActiveModal(item)}
            className={`
              absolute
              ${item.position}
              pointer-events-auto
              cursor-pointer
              group
            `}
          >
            {/* glow */}
            <div
              className="
                absolute
                inset-0
                rounded-3xl
                bg-cyan-400/20
                blur-2xl
                opacity-0
                scale-75
                group-hover:opacity-100
                group-hover:scale-110
                transition-all
                duration-700
              "
            />

            {/* card */}
            <div
              className={`
                relative

                flex
                flex-col
                items-center
                justify-center
                gap-3

                w-[95px]
                h-[105px]

                md:w-[130px]
                md:h-[135px]

                rounded-[28px]

                bg-white/[0.07]

                backdrop-blur-xl

                border
                border-white/15

                shadow-xl
                shadow-black/20

                transition-all
                duration-500

                group-hover:-translate-y-2
                group-hover:shadow-cyan-400/20

                ${item.color}
              `}
            >
              {/* icon box */}
              <div
                className="
                  flex
                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-2xl

                  bg-blue-950/40

                  border
                  border-white/20

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Icon
                  className={`
                    text-2xl

                    text-white/90

                    transition-all
                    duration-300

                    ${item.iconColor}
                  `}
                />
              </div>

              {/* title */}
              <span
                className="
                  text-white/90

                  text-xs
                  md:text-sm

                  font-black

                  drop-shadow-md

                  group-hover:text-white

                  transition-colors

                  duration-300
                "
              >
                {item.title}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* =========================
          MODAL
      ========================== */}

      <AnimatePresence>
        {activeModal && (
          <div
            className="
              fixed
              inset-0
              z-50

              flex
              items-center
              justify-center

              p-4

              pointer-events-auto
            "
          >
            {/* overlay */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setActiveModal(null)}
              className="
                absolute
                inset-0

                bg-slate-950/70

                backdrop-blur-md

                cursor-pointer
              "
            />

            {/* modal box */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="
                relative
                z-10

                w-full
                max-w-lg

                rounded-[35px]

                bg-white/95

                backdrop-blur-2xl

                p-7

                shadow-[0_40px_120px_rgba(14,165,233,.35)]

                border
                border-white

                text-right

                flex
                flex-col
                items-center
              "
            >
              {/* close */}

              <button
                onClick={() => setActiveModal(null)}
                className="
                  absolute
                  left-5
                  top-5

                  w-10
                  h-10

                  rounded-full

                  bg-slate-100

                  flex
                  items-center
                  justify-center

                  hover:bg-red-100

                  hover:text-red-600

                  transition-all

                  cursor-pointer
                "
              >
                <FiX />
              </button>

              <h3
                className="
                  text-xl
                  font-black

                  text-slate-800

                  border-b

                  pb-4

                  w-full
                "
              >
                {activeModal.modalTitle}
              </h3>

              <p
                className="
                  mt-5

                  leading-8

                  text-slate-600

                  font-medium

                  w-full
                "
              >
                {activeModal.content}
              </p>

              <button
                onClick={() => setActiveModal(null)}
                className="
                  mt-7

                  w-full

                  py-3.5

                  rounded-2xl

                  bg-gradient-to-r
                  from-sky-500
                  to-blue-600

                  text-white

                  font-black

                  shadow-lg

                  shadow-blue-500/20

                  active:scale-[0.98]

                  transition-transform

                  cursor-pointer
                "
              >
                متوجه شدم
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
