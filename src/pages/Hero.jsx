// main-Hero
import HeroBackground from "../components/hero/HeroBackground";
import HeroContent from "../components/hero/HeroContent";
import Navbar from "./NavBar";
// start
export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-blue-100">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* MAIN SPLIT LAYOUT */}

      <div className="relative z-10 flex flex-col md:flex-row h-full w-full">
        {/* RIGHT - BACKGROUND */}
        <div className="w-full md:w-1/2 relative">
          <HeroBackground />
        </div>
        {/* LEFT - CONTENT */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8">
          <HeroContent />
        </div>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}
        {/*  Gradient Overlay */}
        {/* <div
          className="absolute inset-0 bg-gradient-to-l from-black/10
         via-transparent to-black/5"
        />  */}
        
      </div>
    </section>
  );
}
// finish