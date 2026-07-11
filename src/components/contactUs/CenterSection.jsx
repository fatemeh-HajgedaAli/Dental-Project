import React from "react";
import arcImg from "../../assets/images/contactUs/background.jpg";

export default function CenterSection({ onOpenModal }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12 items-center min-h-[140px] mt-16 md:mt-20">
      {/* تصاویر کمانی خاکستری سمت راست (در حالت راست‌چین) */}
      <div className="flex justify-center md:justify-start">
        <img
          src={arcImg}
          alt="Dental Services"
          className="h-28 md:h-36 object-contain grayscale opacity-80"
        />
      </div>

      {/* متن کلیک و راهنمای سمت چپ */}
      <div
        onClick={onOpenModal}
        className="text-center md:text-left flex items-center justify-center md:justify-end gap-2 text-slate-400 hover:text-blue-600 cursor-pointer transition-all group"
      >
        <span className="text-sm font-bold">کلیک کنید برای فرم کامل</span>
        <span className="text-lg group-hover:translate-x-[-4px] transition-transform">
          ←
        </span>
      </div>
    </div>
  );
}
