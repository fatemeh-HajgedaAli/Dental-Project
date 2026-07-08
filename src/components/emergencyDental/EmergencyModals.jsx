import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function EmergencyModals({ activeModal, setActiveModal }) {
  return (
    <AnimatePresence>
      {activeModal && (
        <div
          className=" fixed inset-0 z-50 flex items-center 
          justify-center p-4 pointer-events-auto  cursor-pointer "
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
            className=" absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* modal */}

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
            className=" relative z-10 w-full max-w-lg rounded-[35px] bg-white/95 
            backdrop-blur-2xl p-7 shadow-[0_40px_120px_rgba(14,165,233,.35)] 
            border border-white text-right flex flex-col items-center"
          >
            <button
              onClick={() => setActiveModal(null)}
              className=" absolute left-5 top-5 w-10 h-10 rounded-full
               bg-slate-100 flex items-center justify-center 
              hover:bg-red-100 hover:text-red-600 transition-all  cursor-pointer"
            >
              <FiX />
            </button>

            <h3 className=" text-xl font-black text-slate-800 border-b pb-4 w-full ">
              {activeModal.modalTitle}
            </h3>

            <p className=" mt-5 leading-8 text-slate-600 font-medium w-full ">
              {activeModal.content}
            </p>

            <button
              onClick={() => setActiveModal(null)}
              className=" mt-7 w-full py-3.5 rounded-2xl bg-gradient-to-r
               from-sky-900 to-blue-500 text-white font-black shadow-lg
                shadow-blue-500/20 active:scale-[.98] transition-transform  cursor-pointer"
            >
              متوجه شدم
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
