// Hero-btn
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// start
export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="
        mt-8
        flex flex-col sm:flex-row
        gap-4
        justify-center md:justify-start
      "
    >
      {/* Primary CTA */}
      <button
        className="
          px-6 sm:px-7 md:px-8
          py-2 sm:py-3 md:py-3

          text-sm sm:text-base md:text-lg

          rounded-full
          bg-gradient-to-r from-sky-500 to-blue-600
          text-white font-medium

          shadow-lg shadow-sky-500/30
          hover:shadow-xl hover:scale-[1.03]
          active:scale-95

          transition-all duration-300
          cursor-pointer
        "
      >
        رزرو نوبت
      </button>

      {/* Secondary CTA */}
      <Link
        to="/services"
        className="
          px-6 sm:px-7 md:px-8
          py-2 sm:py-3 md:py-3

          text-sm sm:text-base md:text-lg
          text-center

          rounded-full
          border border-sky-500
          text-sky-600 font-medium

          hover:bg-gradient-to-l from-sky-500 to-blue-600
          hover:text-white

          shadow-lg shadow-sky-500/30
          hover:shadow-xl

          transition-all duration-300
          cursor-pointer
        "
      >
        مشاهده خدمات
      </Link>
    </motion.div>
  );
}
// finish
