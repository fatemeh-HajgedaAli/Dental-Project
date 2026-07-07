// icons
import { FaTooth } from "react-icons/fa";
// component
import CurvedTypingText from "./aboutClinicPart/CurvedTypingText";
// start
export default function AboutHeader() {
  return (
    <div className="relative pt-16 text-center max-w-4xl mx-auto px-4">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 rounded-full 
      border border-sky-200/70 bg-white/70 backdrop-blur-xl px-5 py-2
       shadow-sm"
      >
        <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
        <span
          className="text-xs md:text-sm font-semibold 
        tracking-[0.25em] text-sky-700 uppercase"
        >
          About Our Clinic
        </span>
      </div>

      {/* Headline */}
      <h1
        dir="ltr"
        className="
          mt-8
          text-5xl
          sm:text-6xl
          lg:text-8xl
          font-black
          tracking-[-0.06em]
          leading-[0.95]
          text-transparent
          bg-clip-text
          bg-gradient-to-b
          from-slate-900
          via-sky-700
          to-slate-900
          drop-shadow-[0_10px_40px_rgba(14,165,233,.15)]
        "
      >
        We Create
        <br />
        <span className="inline-flex items-center gap-3">
          Y
          <span className="relative inline-flex items-center justify-center">
            <FaTooth
              className="
                text-white/90
                text-[0.8em]
                drop-shadow-[0_1px_30px_rgba(14,165,233,.45)]
              "
            />
          </span>
          ur Smile
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="mt-8 max-w-2xl mx-auto text-base  font-light
      md:text-xl leading-5 text-gray-700"
      >
        Modern dentistry, advanced technology, and compassionate care — helping
        you achieve a healthier, brighter smile with confidence.
      </p>

      {/* Divider */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-sky-400" />
        <div className="h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_20px_rgba(14,165,233,.6)]" />
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-sky-400" />
      </div>

      {/* Typing */}
      <div className="mt-8">
        <CurvedTypingText />
      </div>
    </div>
  );
}
