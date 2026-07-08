// main-Navbar

import TeethLogo from "../assets/images/logos/LogoPng.png";
import DesktopMenu from "../components/navBar/DesktopMenu";
import MobileMenu from "../components/navBar/MobileMenu";

export default function Navbar() {
  return (
    <>
      <div className="relative z-50  mx-6 mt-4 ">
        {/* MAIN NAV */}
        <nav
          className="
           hidden lg:flex justify-between items-center
            px-6 py-4
            rounded-t-2xl
            bg-white/60
            backdrop-blur-s
            border border-white/40
            h-20"
        >
          <DesktopMenu />

          <img src={TeethLogo} alt="Logo" className="w-24 hidden md:flex" />
        </nav>

        {/* SOFT WAVE */}
        <div className="hidden lg:flex absolute left-0 w-full  overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="block w-full h-[30px] text-white fill-current opacity-67 shadow-xl"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </div>

      <MobileMenu />
    </>
  );
}
