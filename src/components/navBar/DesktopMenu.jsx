// Desktop-navbar
import { navLinks } from "./navLinks";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionNavLink = motion(NavLink);
// start
export default function DesktopMenu() {
  // jsx
  return (
    <ul
      className="
        hidden md:flex
        gap-4 lg:gap-2
        items-center
      "
    >
      {navLinks.map(({ title, icon: Icon, to }) => (
        <li key={title}>
          <MotionNavLink
            to={to}
            className="
              relative flex justify-center items-center gap-2
              py-2
              px-2 lg:px-2
              text-sky-700
              text-sm lg:text-base
              whitespace-nowrap
            "
            initial="rest"
            whileHover="hover"
          >
            <Icon />

            <span>{title}</span>

            <motion.div
              className="
                absolute left-0 bottom-0
                h-[3px] w-full rounded-full bg-sky-600
              "
              variants={{
                rest: { scaleX: 0, originX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
          </MotionNavLink>
        </li>
      ))}
    </ul>
  );
}
// finish
