import { motion } from "framer-motion";

import HeroBackground from "../components/hero/HeroBackground";
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
        border-b-10 border-sky-100/50
      "
    >
      {/* =========================
          Background Video
      ========================== */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Overlay*/}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-b
          from-white/10
          via-white/20
          to-white
        "
      />

      {/* =========================
          Navbar
      ========================== */}
      <div className="absolute top-0 left-0 z-40 w-full">
        <Navbar/>
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
        ></div>
      </div>
    </section>
  );
}
