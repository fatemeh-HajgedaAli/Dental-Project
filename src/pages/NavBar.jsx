// main-Navbar

import TeethLogo from "../assets/images/logos/LogoPng.png";
import DesktopMenu from "../components/navBar/DesktopMenu";
import MobileMenu from "../components/navBar/MobileMenu";
// start
export default function Navbar() {
  // jsx
  return (
    <>
      <nav className="flex justify-between items-center px-5 py-4">
        <DesktopMenu />

        <img src={TeethLogo} alt="Logo" className="w-24 hidden md:flex lg:flex" />
      </nav>

      <MobileMenu />
    </>
  );
}
// finish
