// NavBar-Links
// icons
import { IoHomeOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { RiServiceLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
// links-Data
export const navLinks = [
  {
    title: "خانه",
    icon: IoHomeOutline,
    to: "/",
  },
  {
    title: "درباره ما",
    icon: RxPeople,
    to: "/about",
  },
  {
    title: "خدمات",
    icon: RiServiceLine,
    to: "/services",
  },
  {
    title: "تماس",
    icon: BsTelephone,
    to: "/contact",
  },
];
