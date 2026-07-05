import HeroBackground from "../components/hero/HeroBackground";
import HeroContent from "../components/hero/HeroContent";
import HeroButtons from "../components/hero/HeroButtons";
import Navbar from "./NavBar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen bg-[oklch(0.87_0.05_243.25)]"
    >
      {/* Background */}
      <HeroBackground />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 min-h-screen
         items-center"
        >
          {/* Left spacer (design balance) */}
          <div className="hidden lg:block" />

          {/* Right content */}
          <div
            className="flex flex-col items-center text-center lg:gap-2 gap-[16rem]
           lg:items-end lg:text-right"
          >
            {" "}
            <HeroContent />
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
