//   data-icons
import { FiAlertCircle, FiZap, FiActivity, FiClock, FiX } from "react-icons/fi";

//  data
export const iconData = [
  {
    id: "emergency",
    icon: FiAlertCircle,
    title: "پشتیبانی ۲۴/۷",
    position: "left-3 top-[38%] md:left-14 lg:left-24",
    color:
      "group-hover:bg-red-500/20 group-hover:border-red-400 group-hover:shadow-xl group-hover:shadow-red-500/30",
    iconColor: "group-hover:text-red-300",
    modalTitle: "🚨 اقدامات فوری دندان درد",
    content:
      "در صورت درد شدید همراه با تورم یا تب، نیاز به بررسی فوری پزشک وجود داردبه مطب مراجعه کنید.",
  },

  {
    id: "relief",
    icon: FiZap,
    title: "تسکین سریع",
    position: "left-5 top-[15%] md:left-28 lg:left-44",
    color:
      "group-hover:bg-amber-400/20 group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-400/30",
    iconColor: "group-hover:text-amber-300",
    modalTitle: "⚡ کاهش موقت درد",
    content:
      "شستشو با آب نمک ولرم و مراقبت اولیه می‌تواند تا مراجعه به پزشک کمک کند.",
  },

  {
    id: "expert",
    icon: FiActivity,
    title: "درمان تخصصی",
    position: "right-5 top-[15%] md:right-28 lg:right-44",
    color:
      "group-hover:bg-cyan-400/20 group-hover:border-cyan-300 group-hover:shadow-xl group-hover:shadow-cyan-400/30",
    iconColor: "group-hover:text-cyan-300",
    modalTitle: "🦷 مراقبت تخصصی",
    content:
      "تشخیص علت اصلی درد و درمان اصولی توسط دندانپزشک انجام می‌شودبا ما در تماس باشید.",
  },

  {
    id: "sameday",
    icon: FiClock,
    title: "درمان همان روز",
    position: "right-3 top-[38%] md:right-14 lg:right-24",
    color:
      "group-hover:bg-blue-400/20 group-hover:border-blue-300 group-hover:shadow-xl group-hover:shadow-blue-400/30",
    iconColor: "group-hover:text-blue-300",
    modalTitle: "⏱ خدمات اورژانسی",
    content:
      "برای بیماران اورژانسی، زمان‌های سریع برای کاهش درد در نظر گرفته می‌شود.",
  },
];
