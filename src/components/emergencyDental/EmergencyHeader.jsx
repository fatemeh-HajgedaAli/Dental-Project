// icons
import { FaTooth } from "react-icons/fa";

// start
export default function EmergencyHeader() {
  return (
    <div
      className="relative mt-[-20px] text-center 
    max-w-5xl mx-auto px-4"
      dir="ltr"
    >
      {/* Badge */}
      <div
        className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-sky-200/70
        bg-white/80
        backdrop-blur-xl
        px-4
        py-2.5
        shadow-[0_10px_30px_rgba(14,165,233,.08)]
        "
      >
        <span
          className="
          h-2.5
          w-2.5
          rounded-full
          bg-sky-500
          animate-pulse
          shadow-[0_0_15px_rgba(14,165,233,.8)]
          "
        />

        <span
          className="
          text-xs
          md:text-sm
          font-bold
          tracking-[0.35em]
          text-sky-700
          uppercase
          "
        >
          Emergency Service{" "}
        </span>
      </div>

      {/* Main Hero */}
      <h1
        dir="ltr"
        className="
        mt-10 lg:mt-5
        text-5xl
        sm:text-6xl
        lg:text-8xl
        font-black
        tracking-[-0.07em]
        leading-[0.9]
        text-transparent
        bg-clip-text
        bg-gradient-to-b
        from-slate-50
        via-sky-300
        to-slate-900
        drop-shadow-[0_15px_50px_rgba(14,165,233,.18)]

        "
      >
        YOUR SMILE.
        <br />
        <span
          className="
          inline-flex
          items-center
          justify-center
          gap-3
          "
        >
          OUR
          <span
            className="
            relative
            inline-flex
            items-center
            justify-center
            "
          >
            <span
              className="
              absolute
              inset-0
              rounded-full
              bg-sky-400/30
              blur-xl
              "
            />

            <FaTooth
              className="
              relative
              text-sky-500
              text-[0.85em]
              drop-shadow-[0_10px_30px_rgba(14,165,233,.45)]
              "
            />
          </span>
          PRIORITY
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="
        w-[300px]
        mt-5
        mx-auto
        text-base
        md:text-3sm
        leading-5
        font-light
        text-slate-400
        tracking-5 
        lg:w-full
        "
      >
        Advanced dentistry, modern technology, and personalized care — creating
        confident smiles with comfort and precision.
      </p>

      {/* Divider */}
      <div
        className="
        mt-1
        flex
        items-center
        justify-center
        gap-2
        "
      >
        <div
          className="
          h-[1px]
          w-24
          bg-gradient-to-r
          from-transparent
          to-sky-400
          "
        />

        <div
          className="
          flex
          items-center
          justify-center
          h-4
          w-4
          rounded-full
          bg-sky-500
          shadow-[0_0_25px_rgba(14,165,233,.8)]
          "
        />

        <div
          className="
          h-[1px]
          w-24
          bg-gradient-to-l
          from-transparent
          to-sky-400
          "
        />
      </div>
    </div>
  );
}
