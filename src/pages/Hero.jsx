import { motion } from "framer-motion";

import HeroBackground from "../components/hero/HeroBackground";
import HeroContent from "../components/hero/HeroContent";
import HeroButtons from "../components/hero/HeroButtons";
import Navbar from "./NavBar";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
      "
    >
      {/* =========================
          Background Video
      ========================== */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      {/* =========================
          Mobile Overlay
      ========================== */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-b
          from-white/20
          via-white/30
          to-white
        "
      />

      {/* =========================
          Navbar
      ========================== */}
      <div className="absolute top-0 left-0 z-40 w-full">
        <Navbar />
      </div>

      {/* =========================
          Content
      ========================== */}
      <div
        className="
          relative
          z-20
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            min-h-screen
            grid-cols-1
            items-center
            lg:grid-cols-2
          "
        >
          {/* Content */}
          <motion.div
            className="
              flex
              w-full
              flex-col
              items-center
              lg:items-start
            "
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <HeroContent />
          </motion.div>
          {/* Desktop Spacer */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
