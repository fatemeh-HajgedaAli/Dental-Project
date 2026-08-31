// ================================
// Icons
// ================================

import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { PiOfficeChairLight } from "react-icons/pi";

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
    title: " نگاهی به مطب",
    icon: PiOfficeChairLight,
    to: "gallery",
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
// ================================
// Footer Links
// ================================

export const footerLinks = [
  {
    title: "صفحه اصلی",
    to: "hero",
  },
  {
    title: "خدمات دندانپزشکی",
    to: "services",
  },
  {
    title: "مجله سلامت",
    to: "tips",
  },
  {
    title: "سوالات متداول",
    to: "faq",
  },
  {
    title: "تماس با ما",
    to: "contact",
  },
];

// ================================
// Clinic Information
// ================================

export const clinicInfo = {
  address: "اصفهان، شهرضا، میدان قائمیه، کوچه حیدرپور (ابتدای کوچه کلانتری)",

  phone: "031.53238027",

  mobile: "09336155769",

  email: "zohreh.safdarian.dental@gmail.com",

  instagram: "Dr_Zohreh_Safdarian",
};

// ================================
// Working Hours
// ================================

export const workingHours = [
  {
    day: "شنبه تا پنجشنبه",
    time: "۹ تا ۲۰",
  },
  {
    day: "جمعه",
    time: "تعطیل",
    closed: true,
  },
];
