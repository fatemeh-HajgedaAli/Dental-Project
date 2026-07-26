import { useEffect, useState } from "react";
import HeroVideo from "../../assets/images/videos/HeroVideo.mp4";

export default function HeroBackground() {
  // useState for bg-animation
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlur(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden lg:top-20">
      <video
        src={HeroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Mobile Blur */}
      <div
        className={`absolute inset-0 bg-black/10 lg:hidden transition-all duration-1000 ease-in-out
          ${
            showBlur
              ? "backdrop-blur-md opacity-100"
              : "backdrop-blur-none opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Desktop Fade Left */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.92_0.10_248.48)] via-transparent to-transparent hidden md:block" /> */}

      {/* Desktop Fade Bottom */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.85_0.02_248.06)] via-transparent to-transparent hidden md:block" /> */}

      {/* General Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.85_0.20_270.23)] via-[oklch(0.92_0.03_230.23/.35)] to-transparent" /> */}
    </div>
  );
}
