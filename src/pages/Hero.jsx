import HeroBackground from "../components/hero/HeroBackground";
import ToothDraggable from "../components/hero/heroButton/ToothDraggable";
import HeroButtons from "../components/hero/HeroButtons";
import HeroContent from "../components/hero/HeroContent";
// import HeroButtons from "../components/hero/HeroButtons";
import Navbar from "./NavBar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[oklch(0.89_0.05_243.25)]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <HeroBackground />
      </div>

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
          <div className="flex">
            <HeroContent />
          </div>
          <div className="flexitems-start lg:mr-20">
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
