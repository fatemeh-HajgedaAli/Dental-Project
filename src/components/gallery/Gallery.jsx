import React from "react";
import officeVideo from "../../assets/images/videos/office.mp4";
import { FaTooth } from "react-icons/fa";

export default function Gallery() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F5F2EB]
        px-4 py-20
        md:px-8
        lg:px-12 lg:py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute
          -right-40 top-20
          h-[500px] w-[500px]
          rounded-full
          bg-[#DCE7E0]/50
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -left-40 bottom-0
          h-[400px] w-[400px]
          rounded-full
          bg-[#E7DCC8]/40
          blur-[120px]
        "
      />

      {/* Subtle Grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.18]
          [background-image:linear-gradient(#BDB6A8_1px,transparent_1px),linear-gradient(90deg,#BDB6A8_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 flex items-center gap-2 font-['Space_Grotesk'] text-xs font-medium tracking-[0.3em] text-[#A9885A]">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-px bg-[#A9885A]" />
                <span className="absolute h-px w-3 bg-[#A9885A]" />
              </span>
              OUR CLINIC
            </span>

            <h2 className="font-['Vazirmatn'] text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1A1D1B] md:text-4xl lg:text-5xl">
              فضایی برای
              <span className="mr-3 font-medium text-[#7E9C8F]">آرامش شما</span>
            </h2>
          </div>

          <p className="max-w-sm text-right font-['Vazirmatn'] text-sm leading-7 text-neutral-500">
            محیطی آرام، مدرن و حرفه‌ای که تجربه‌ی درمان را برای شما متفاوت
            می‌کند.
          </p>
        </div>

        {/* Video Area */}
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Ruler */}
          <div className="hidden lg:col-span-1 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-10">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={`bg-[#BDB6A8] ${
                  i % 4 === 0 ? "h-px w-6" : "h-px w-3"
                }`}
              />
            ))}
          </div>

          {/* Video Frame */}
          <div
            className="
              group relative col-span-1
              h-[480px]
              overflow-hidden
              rounded-[8px]
              border border-[#D4CEC1]
              bg-[#1A1D1B]
              p-2
              shadow-[0_30px_80px_-35px_rgba(26,29,27,0.45)]
              md:h-[580px]
              lg:col-span-11 lg:h-[680px]
            "
          >
            <div className="relative h-full w-full overflow-hidden rounded-[4px]">
              {/* Video */}
              <video
                src={officeVideo}
                autoPlay
                muted
                loop
                playsInline
                className="
                  absolute inset-0
                  h-full w-full
                  scale-[1.02]
                  object-cover
                  saturate-[0.85]
                  transition-transform
                  duration-[2500ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Cinematic Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#101410]/85
                  via-[#101410]/15
                  to-transparent
                "
              />

              {/* Soft Color Overlay */}
              <div className="absolute inset-0 bg-[#738F82]/[0.06] mix-blend-soft-light" />

              {/* Corner Marks */}
              <span className="absolute left-5 top-5 h-3 w-3 rounded-full border border-white/50" />
              <span className="absolute right-5 top-5 h-3 w-3 rounded-full border border-white/50" />
              <span className="absolute bottom-5 left-5 h-3 w-3 rounded-full border border-white/30" />
              <span className="absolute bottom-5 right-5 h-3 w-3 rounded-full border border-white/30" />

              {/* Top Label */}
              <div className="absolute left-5 top-12 flex items-center gap-3 text-white md:left-8">
                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-white/30
                    bg-white/10
                    backdrop-blur-md
                  "
                >
                  <FaTooth className="text-sm" />
                </span>

                <span className="font-['Space_Grotesk'] text-xs tracking-[0.2em] text-white/70">
                  THE CLINIC
                </span>
              </div>

              {/* Main Content */}
              <div
                className="
                  absolute bottom-8 right-6
                  max-w-2xl
                  text-right text-white
                  md:bottom-12 md:right-10
                  lg:right-14
                "
              >
                <span className="mb-4 block font-['Space_Grotesk'] text-xs tracking-[0.2em] text-white/60">
                  DR. ZOHREH SAFDARIAN
                </span>

                <h3 className="font-['Vazirmatn'] text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  جایی برای
                  <br />
                  <span className="font-medium text-[#B7CDC1]">
                    آرامش و اعتماد
                  </span>
                </h3>

                <p className="mt-5 max-w-md font-['Vazirmatn'] text-sm leading-7 text-white/65 md:text-base">
                  هر جزئیات در این فضا با هدف ایجاد تجربه‌ای آرام، حرفه‌ای و
                  متفاوت طراحی شده است.
                </p>
              </div>

              {/* Play */}
              <div className="absolute bottom-8 left-6 md:bottom-12 md:left-10">
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-full
                    border border-white/30
                    bg-white/10
                    backdrop-blur-md
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:bg-white/20
                  "
                >
                  <span className="ml-0.5 text-sm text-white">▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div
            className="
              relative z-20
              -mt-16 ml-4
              w-[calc(100%-2rem)]
              max-w-sm
              rounded-[6px]
              border border-[#D4CEC1]
              bg-[#FBF9F5]/95
              p-6
              shadow-[0_25px_60px_-25px_rgba(26,29,27,0.35)]
              backdrop-blur-md
              md:ml-8
              lg:col-start-2 lg:col-end-6
            "
          >
            <p className="font-['Vazirmatn'] text-sm leading-7 text-[#1A1D1B]">
              در مطب دکتر زهره صفدریان، هر جزئیات با هدف ایجاد تجربه‌ای آرام و
              متفاوت برای شما طراحی شده است.
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-[#E4DFD5] pt-4">
              <span className="font-['Space_Grotesk'] text-[11px] tracking-[0.15em] text-[#A9885A]">
                EXPLORE THE SPACE
              </span>

              <span className="text-sm text-[#7E9C8F]">←</span>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 flex items-center justify-between border-t border-[#D8D1C4] pt-5">
          <span className="font-['Space_Grotesk'] text-xs tracking-[0.15em] text-neutral-400">
            A SPACE DESIGNED AROUND YOU
          </span>

          <span className="flex items-center gap-2 font-['Space_Grotesk'] text-xs tracking-[0.15em] text-neutral-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7E9C8F] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7E9C8F]" />
            </span>
            LIVE FOOTAGE
          </span>
        </div>
      </div>
    </section>
  );
}
