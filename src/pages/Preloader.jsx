import { useEffect, useState } from "react";
import { createPortal } from "react-dom"; // یا react-dom
import preLoading from "../assets/images/videos/loading.mp4";

export default function Preloader({ onComplete }) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // 🔒 قفل کردن اسکرول صفحه موقع نمایش Preloader
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      // 🔓 باز کردن اسکرول صفحه بعد از بسته شدن Preloader
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleVideoEnd = () => {
    // 1. شروع انیمیشن Fade-Out
    setIsExiting(true);

    // 2. صدا زدن callback پس از اتمام انیمیشن خروج (500ms)
    setTimeout(() => {
      onComplete?.();
    }, 500);
  };

  const preloaderContent = (
    <div
      className={`
        fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none bg-white px-2
        transition-opacity duration-500 ease-in-out
        ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Background Glass Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />

      {/* Background Glows */}
      <div className="absolute top-[15%] left-[10%] w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-sky-400/15 blur-[60px] sm:blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-indigo-400/15 blur-[60px] sm:blur-[90px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center gap-2 w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[380px]">
        {/* Video Card Container */}
        <div
          className={`
            relative w-full p-1.5 rounded-2xl sm:rounded-3xl 
            bg-white/30 backdrop-blur-md border border-white/60 
            shadow-lg sm:shadow-xl overflow-hidden
            transition-all duration-500 ease-out
            ${
              isVideoReady
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-2"
            }
          `}
        >
          {/* Inner Gradient Highlight */}
          <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-sky-300/20 via-transparent to-indigo-300/20 pointer-events-none" />

          {/* Video */}
          <video
            src={preLoading}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoReady(true)}
            onCanPlay={() => setIsVideoReady(true)}
            onEnded={handleVideoEnd}
            className="block w-full h-auto object-cover rounded-[10px] sm:rounded-[18px]"
          />
        </div>

        {/* Loading Text */}
        <div
          className={`
            flex items-center gap-2 text-sky-950/70 text-xs sm:text-sm tracking-[0.15em] font-medium whitespace-nowrap
            transition-all duration-500 delay-150
            ${
              isVideoReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
          `}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          <span>در حال بارگذاری...</span>
        </div>
      </div>
    </div>
  );

  // رندر کردن کامپوننت مستقیماً در body
  return createPortal(preloaderContent, document.body);
}
