import { useState } from "react";
import preLoading from "../assets/images/videos/loading.mp4";

export default function Preloader({ onComplete }) {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoEnd = () => {
    setTimeout(() => {
      onComplete?.();
    }, 200); 
  };

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        select-none
        bg-black/30 /* لایه تیره پس‌زمینه برای کنتراست */
        transition-opacity
        duration-500
        ${isVideoReady ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* 
        --- لایه اصلی گلاسی (Main Glass Layer) ---
        کل صفحه را با تاری و افکت شیشه می‌پوشاند
      */}
      <div
        className="
          absolute
          inset-0
          backdrop-blur-xl /* تاری شدید برای پس‌زمینه */
          bg-white/5 /* لایه نیمه‌شفاف روی تاری */
          border border-white/10 /* حاشیه بسیار ظریف شیشه‌ای */
          pointer-events-none
        "
      />

      {/* 
        --- هاله‌های نوری عمق‌دهنده (Background Glows) ---
        نورهای نئونی ملایم در پس‌زمینه شیشه
      */}
      <div
        className="
          absolute
          top-1/4
          left-1/4
          w-96
          h-96
          rounded-full
          bg-sky-500/20 /* نور آبی */
          blur-[100px]
          pointer-events-none
        "
      />
      <div
        className="
          absolute
          bottom-1/4
          right-1/4
          w-96
          h-96
          rounded-full
          bg-indigo-500/15 /* نور بنفش ملایم */
          blur-[100px]
          pointer-events-none
        "
      />

      {/* 
        --- کانتینر مرکزی (Центральный контейнер) ---
      */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          gap-6
        "
      >
        {/* 
          --- قاب شیشه‌ای ویدیو (Video Glass Frame) ---
        */}
        <div
          className={`
            relative
            p-1.5 /* فاصله کم برای حاشیه نوری */
            rounded-[40px] /* گوشه‌های کاملا گرد */
            bg-white/5 /* پس‌زمینه شیشه‌ای قاب */
            backdrop-blur-sm
            shadow-2xl shadow-black/20 /* سایه عمیق برای عمق */
            border border-white/10 /* حاشیه شیشه‌ای */
            
            /* انیمیشن لود شدن قاب */
            transition-all
            duration-500
            ease-out
            ${
              isVideoReady
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-4"
            }
          `}
        >
          {/* 
            حاشیه نوری گرادینت داخلی
          */}
          <div className="absolute inset-0.5 rounded-[38px] bg-gradient-to-br from-sky-300/30 via-transparent to-indigo-300/20 opacity-50" />

          {/* Video */}
          <video
            src={preLoading}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoReady(true)}
            onEnded={handleVideoEnd}
            className="
              relative
              z-10
              w-[380px]
              sm:w-[260px]
              h-auto
              object-contain
              rounded-[36px] /* کمی کوچک‌تر از قاب */
            "
          />
        </div>

        {/* 
          --- متن لودینگ پایین (Optional Loading Text) ---
        */}
        <div
          className={`
            text-sky-100/60
            text-sm
            tracking-widest
            font-light
            flex
            items-center
            gap-3
            transition-opacity
            duration-700
            delay-300
            ${isVideoReady ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-pulse" />
          در حال بارگذاری  ....
        </div>
      </div>
    </div>
  );
}
