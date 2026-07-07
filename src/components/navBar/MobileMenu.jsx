// NAVBAR-MOBILE
import { navLinks } from "./navLinks";
import { NavLink } from "react-router-dom";
import TeethLogo from "../../assets/images/logos/LogoPng.png";
// start
export default function MobileMenu() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 md:hidden z-50">
      <div
        className="rounded-full bg-white/90 backdrop-blur-xl shadow-xl p-1  opacity-80
      flex flex-col gap-6 items-center"
      >
        {/* image */}
        <img src={TeethLogo} alt="Logo" className="w-12" />
        {/* links-Icon */}
        {navLinks.map(({ title, icon: Icon, to }) => (
          <NavLink
            key={title}
            to={to}
            className={({ isActive }) =>
              `relative text-2xl p-2 rounded-full transition ${
                isActive
                  ? "bg-sky-100 text-sky-600"
                  : "text-sky-700 hover:text-sky-400"
              }`
            }
          >
            <Icon />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
// finish
