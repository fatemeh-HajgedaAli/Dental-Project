import {
  Stethoscope,
  Sparkles,
  Bone,
  AlignCenterVertical,
  Droplets,
  Activity,
  Gem,
  Siren,
} from "lucide-react";

import implant from "../../assets/images/services/empelant.jpg";
import beauty from "../../assets/images/services/implant.jpg";
import ortho from "../../assets/images/services/orto.jpg";
import cleaning from "../../assets/images/services/jermgiri1.jpg";
import veneer from "../../assets/images/services/veener.jpg";
import bleching from "../../assets/images/services/bleching.jpg";
import dentise from "../../assets/images/services/dentise.jpg";

export const servicesData = [
  {
    id: 1,
    title: "دندانپزشکی عمومی",
    image: dentise,
    icon: Stethoscope,
    description:
      "مراقبت‌های روتین و جامع برای حفظ سلامت، استحکام و بهداشت کامل دهان و دندان شما.",
  },
  {
    id: 2,
    title: "بلیچینگ و سفید کردن",
    image: bleching,
    icon: Sparkles,
    description:
      "سفید کردن تخصصی دندان‌ها برای داشتن لبخندی درخشان، جذاب و با اعتمادبه‌نفس.",
  },
  {
    id: 3,
    title: "ایمپلنت دندان",
    image: implant,
    icon: Bone,
    description:
      "جایگزینی دائمی، مستحکم و با ظاهر کاملاً طبیعی برای دندان‌های از دست رفته.",
  },
  {
    id: 4,
    title: "ارتودنسی",
    image: ortho,
    icon: AlignCenterVertical,
    description:
      "استفاده از ترازکننده‌ها و بریس‌های مدرن برای ردیف کردن اصولی و زیبای دندان‌ها.",
  },
  {
    id: 5,
    title: "جرم‌گیری تخصصی",
    image: cleaning,
    icon: Droplets,
    description:
      "پاکسازی عمیق و حرفه‌ای دندان‌ها جهت محافظت در برابر پلاک، جرم و پوسیدگی.",
  },
  {
    id: 6,
    title: "عصب‌کشی (درمان ریشه)",
    image: beauty,
    icon: Activity,
    description:
      "درمانی آرام، بدون درد و دقیق برای نجات و بازسازی دندان‌های آسیب‌دیده.",
  },
  {
    id: 7,
    title: "دندانپزشکی زیبایی",
    image: veneer,
    icon: Gem,
    description:
      "طراحی اختصاصی لبخند، کامپوزیت و لمینت متناسب با فرم و آناتومی چهره شما.",
  },
  {
    id: 8,
    title: "دندانپزشکی اورژانسی",
    image: implant,
    icon: Siren,
    description:
      "ارائه خدمات سریع، فوری و دلسوزانه در مواقع اضطراری برای حفظ سلامت دندان‌های شما.",
  },
];
