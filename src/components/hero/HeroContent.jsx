// Hero-content
import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
// start
export default function HeroContent() {
  return (
    <div className="max-w-xl text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-sky-800 leading-tight"
      >
        لبخندی زیبا، آغاز یک زندگی بهتر
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-5 text-gray-800 text-xs md:text-xl"
      >
        خدمات حرفه‌ای دندانپزشکی با جدیدترین تکنولوژی و تیم متخصص
      </motion.p>

      <HeroButtons />
    </div>
  );
}
// finish
