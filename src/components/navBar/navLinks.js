// icons
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

// links
export const navLinks = [
  {
    title: "خانه",
    icon: IoHomeOutline,
    to: "hero",
  },
  {
    title: "خدمات ما",
    icon: RiServiceLine,
    to: "services",
  },
  {
    title: "با هم بخوانیم",
    icon: IoBookOutline,
    to: "tips",
  },
  {
    title: "سوالات متداول",
    icon: HiOutlineQuestionMarkCircle,
    to: "faq",
  },
  {
    title: "تماس با ما",
    icon: BsTelephone,
    to: "contact",
  },
];
