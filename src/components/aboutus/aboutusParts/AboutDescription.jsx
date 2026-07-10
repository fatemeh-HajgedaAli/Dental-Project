import { motion } from "framer-motion";

export default function AboutDescription({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.7 }}
      className="
        relative

        max-w-2xl

        rounded-3xl

        border
        border-white/50

        bg-white/50

        backdrop-blur-2xl

        p-7

        shadow-[0_25px_60px_rgba(14,165,233,.10)]

        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-white/0

          via-white/30

          to-white/0
        "
      />

      <p
        className="
          relative
          z-10

          text-slate-600

          leading-9

          text-base
          lg:text-lg

          font-medium
        "
      >
        {children}
      </p>
    </motion.div>
  );
}
