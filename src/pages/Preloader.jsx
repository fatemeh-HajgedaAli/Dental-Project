// Pre-Loading
import { useState } from "react";
import preLoading from "../assets/images/videos/PreLoading.mp4";

// start
export default function Preloader({ onComplete }) {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoEnd = () => {
    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        select-none
        bg-[#0a0f18]
      "
    >
      {/* Glow Effect پشت ویدیو */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Container اصلی که ویدیو و متن لایه‌بندی‌شده رو نگه می‌داره */}
      <div className="relative flex flex-col items-center justify-center w-[85vw] max-w-2xl">
        {/* Wrapper ویدیو با Mask لبه‌ها */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
        >
          <video
            src={preLoading}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoReady(true)}
            onEnded={handleVideoEnd}
            className="
              w-full
              h-auto
              object-contain
              mix-blend-screen
            "
          />
        </div>

        {/* Text Positioned Over the Bottom Edge of the Video */}
        <div
          className="
            absolute
            lg:flex lg:flex-row
            lg:bottom-[-30px]
bottom-[-40px]
            left-0
            right-0
            lg:right-[120px]
            z-20
            text-center
            items-center
            pointer-events-none
          "
        >
          <h2
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-white
              tracking-tight
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
            "
          >
            لبخندی زیبا،
          </h2>

          <p
            className="
              mt-1
              text-xs
              sm:text-sm
              md:text-base
              text-sky-200
              font-medium
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
            "
          >
            آغاز یک زندگی بهتر
          </p>
        </div>
      </div>
    </div>
  );
}
